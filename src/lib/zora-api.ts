// Zora API Service
export interface ZoraNFT {
  id: string
  name: string
  description: string
  image: string
  creator: string
  price: string
  chain: string
}

export interface MintResponse {
  transactionHash: string
  success: boolean
  message: string
}

const ZORA_API_URL = 'https://api.zora.co/graphql'

// Get NFT collections from Zora
export const getZoraNFTCollections = async (creatorAddress: string): Promise<ZoraNFT[]> => {
  try {
    const zoraApiKey = process.env.NEXT_PUBLIC_ZORA_API_KEY
    if (!zoraApiKey) {
      console.warn('Zora API key not found')
      return []
    }

    const query = `
      query GetCollections($creator: String!) {
        collections(where: {creator: $creator}) {
          nodes {
            id
            name
            description
            image {
              uri
            }
            creator {
              address
            }
          }
        }
      }
    `

    const response = await fetch(ZORA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${zoraApiKey}`,
      },
      body: JSON.stringify({
        query,
        variables: { creator: creatorAddress },
      }),
    })

    const data = await response.json()

    if (data.data && data.data.collections) {
      return data.data.collections.nodes.map((collection: any) => ({
        id: collection.id,
        name: collection.name,
        description: collection.description,
        image: collection.image?.uri || '/placeholder.png',
        creator: collection.creator.address,
        price: '0',
        chain: 'zora',
      }))
    }

    return []
  } catch (error) {
    console.error('Error fetching Zora collections:', error)
    return []
  }
}

// Get NFT drops from Zora
export const getZoraNFTDrops = async (): Promise<ZoraNFT[]> => {
  try {
    const zoraApiKey = process.env.NEXT_PUBLIC_ZORA_API_KEY
    if (!zoraApiKey) {
      return []
    }

    const query = `
      query GetDrops {
        drops(first: 10, sort: CREATED_AT_DESC) {
          nodes {
            id
            name
            description
            image {
              uri
            }
            creator {
              address
            }
            price {
              nativePrice {
                decimal
              }
            }
          }
        }
      }
    `

    const response = await fetch(ZORA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${zoraApiKey}`,
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()

    if (data.data && data.data.drops) {
      return data.data.drops.nodes.map((drop: any) => ({
        id: drop.id,
        name: drop.name,
        description: drop.description,
        image: drop.image?.uri || '/placeholder.png',
        creator: drop.creator.address,
        price: drop.price?.nativePrice?.decimal || '0',
        chain: 'zora',
      }))
    }

    return []
  } catch (error) {
    console.error('Error fetching Zora drops:', error)
    return []
  }
}

// Mint NFT on Zora
export const mintNFTOnZora = async (
  contractAddress: string,
  quantity: number,
  userAddress: string
): Promise<MintResponse> => {
  try {
    if (!window.ethereum) {
      return {
        transactionHash: '',
        success: false,
        message: 'No Ethereum provider found',
      }
    }

    // Get signer from MetaMask
    const provider = new (window as any).ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    // Mint contract ABI (basic ERC721 mint function)
    const abi = [
      {
        name: 'mint',
        type: 'function',
        inputs: [{ name: 'quantity', type: 'uint256' }],
        outputs: [],
        stateMutability: 'payable',
      },
    ]

    const contract = new (window as any).ethers.Contract(contractAddress, abi, signer)

    const tx = await contract.mint(quantity, {
      value: (window as any).ethers.utils.parseEther('0.1'), // Example price
    })

    const receipt = await tx.wait()

    return {
      transactionHash: receipt.transactionHash,
      success: true,
      message: 'NFT minted successfully!',
    }
  } catch (error) {
    console.error('Error minting NFT:', error)
    return {
      transactionHash: '',
      success: false,
      message: `Minting failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    }
  }
}

// Get trending NFTs from Zora
export const getTrendingNFTs = async (): Promise<ZoraNFT[]> => {
  try {
    // Mock trending data - in production, fetch from Zora
    return [
      {
        id: '1',
        name: 'Pixelated Drips',
        description: 'Limited edition digital fashion NFTs',
        image: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fb743697cc62d4340a133e80ffb3b2d9d?format=webp&width=800',
        creator: '0x5f188E67C374feF892Cc3BaC4aE0689166C6a620',
        price: '1.5',
        chain: 'base',
      },
      {
        id: '2',
        name: 'FX1 Digital Wardrobe',
        description: 'Wear to earn $FDH and $fx1_hubs',
        image: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fc61a95a9cee541f9b9e7d056a6bef2bc?format=webp&width=800',
        creator: '0x5f188E67C374feF892Cc3BaC4aE0689166C6a620',
        price: '2.0',
        chain: 'zora',
      },
    ]
  } catch (error) {
    console.error('Error fetching trending NFTs:', error)
    return []
  }
}
