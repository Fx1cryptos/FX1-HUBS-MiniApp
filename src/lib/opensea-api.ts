// OpenSea API Service
export interface OpenSeaNFT {
  id: string
  name: string
  description: string
  image_url: string
  creator: string
  collection: string
  floorPrice: string
  chain: string
}

const OPENSEA_API_BASE = 'https://api.opensea.io/api/v2'

// Get NFT collection from OpenSea
export const getOpenSeaCollection = async (
  collectionSlug: string
): Promise<OpenSeaNFT[]> => {
  try {
    const response = await fetch(
      `${OPENSEA_API_BASE}/collection/${collectionSlug}/nfts`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.nfts) {
      return data.nfts.map((nft: any) => ({
        id: nft.identifier,
        name: nft.name,
        description: nft.description,
        image_url: nft.image_url,
        creator: nft.creator,
        collection: nft.collection,
        floorPrice: nft.floor_price || '0',
        chain: nft.chain,
      }))
    }

    return []
  } catch (error) {
    console.error('Error fetching OpenSea collection:', error)
    return []
  }
}

// Get NFTs owned by wallet address
export const getWalletNFTs = async (walletAddress: string): Promise<OpenSeaNFT[]> => {
  try {
    const response = await fetch(
      `${OPENSEA_API_BASE}/chain/base/account/${walletAddress}/nfts`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.nfts) {
      return data.nfts.map((nft: any) => ({
        id: nft.identifier,
        name: nft.name,
        description: nft.description,
        image_url: nft.image_url,
        creator: nft.creator,
        collection: nft.collection,
        floorPrice: nft.floor_price || '0',
        chain: 'base',
      }))
    }

    return []
  } catch (error) {
    console.error('Error fetching wallet NFTs:', error)
    // Return mock data for demo
    return [
      {
        id: '1',
        name: 'FX1 Digital Hoodie',
        description: 'Limited edition digital fashion',
        image_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fc61a95a9cee541f9b9e7d056a6bef2bc?format=webp&width=800',
        creator: '0x5f188E67C374feF892Cc3BaC4aE0689166C6a620',
        collection: 'FX1 Digital Wardrobe',
        floorPrice: '1.5',
        chain: 'base',
      },
    ]
  }
}

// Get collection floor price
export const getCollectionFloorPrice = async (collectionSlug: string): Promise<string> => {
  try {
    const response = await fetch(
      `${OPENSEA_API_BASE}/collection/${collectionSlug}`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`)
    }

    const data = await response.json()
    return data.collection?.floor_price || '0'
  } catch (error) {
    console.error('Error fetching floor price:', error)
    return '0'
  }
}

// Get collection stats
export const getCollectionStats = async (
  collectionSlug: string
): Promise<{
  floor_price: string
  total_volume: string
  one_day_volume: string
  one_day_change: string
}> => {
  try {
    const response = await fetch(
      `${OPENSEA_API_BASE}/collection/${collectionSlug}`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`)
    }

    const data = await response.json()

    return {
      floor_price: data.collection?.floor_price || '0',
      total_volume: data.collection?.total_volume || '0',
      one_day_volume: data.collection?.one_day_volume || '0',
      one_day_change: data.collection?.one_day_change || '0',
    }
  } catch (error) {
    console.error('Error fetching collection stats:', error)
    return {
      floor_price: '0',
      total_volume: '0',
      one_day_volume: '0',
      one_day_change: '0',
    }
  }
}

// Search NFT collections
export const searchCollections = async (query: string): Promise<OpenSeaNFT[]> => {
  try {
    const response = await fetch(
      `${OPENSEA_API_BASE}/search/collections?query=${encodeURIComponent(query)}&chain=base`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.collections) {
      return data.collections.map((collection: any) => ({
        id: collection.collection,
        name: collection.name,
        description: collection.description,
        image_url: collection.image_url,
        creator: collection.creator,
        collection: collection.collection,
        floorPrice: collection.floor_price || '0',
        chain: 'base',
      }))
    }

    return []
  } catch (error) {
    console.error('Error searching collections:', error)
    return []
  }
}
