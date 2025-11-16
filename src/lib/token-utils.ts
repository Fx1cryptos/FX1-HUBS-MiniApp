export interface TokenData {
  symbol: string
  name: string
  address: string
  decimals: number
}

export const FDH_TOKEN: TokenData = {
  symbol: 'FDH',
  name: 'FX1 Digital Hubs',
  address: '0x...',
  decimals: 18,
}

export const BASE_CHAIN = {
  id: 8453,
  name: 'Base',
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://mainnet.base.org',
}

export const ZORA_CHAIN = {
  id: 7777777,
  name: 'Zora',
  rpcUrl: 'https://rpc.zora.energy',
}

export function formatTokenAmount(amount: string | number, decimals: number = 18): string {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  return (value / Math.pow(10, decimals)).toFixed(4)
}

export function parseTokenAmount(amount: string | number, decimals: number = 18): string {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  return (value * Math.pow(10, decimals)).toString()
}

export function shortenAddress(address: string, chars: number = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

export async function fetchTokenPrice(symbol: string = 'FDH'): Promise<number> {
  const mockPrices: Record<string, number> = {
    FDH: 0.125,
    ETH: 3500,
    USDC: 1.0,
  }

  return mockPrices[symbol] || 0
}

export async function fetchNFTCollection(contractAddress: string) {
  const mockCollection = {
    name: 'Creator Collection',
    description: 'A collection of digital art NFTs',
    image: 'https://via.placeholder.com/400x400',
    floorPrice: '1.5 ETH',
    volume24h: '45.2 ETH',
    owners: 234,
    items: 1000,
    royalty: 10,
  }

  return mockCollection
}

export async function fetchUserNFTs(address: string) {
  const mockNFTs = [
    {
      id: 1,
      name: 'Digital Fashion #1',
      image: 'https://via.placeholder.com/300x300',
      contract: '0x...',
      tokenId: '1',
      price: '2.5 ETH',
    },
    {
      id: 2,
      name: 'Avatar Genesis',
      image: 'https://via.placeholder.com/300x300',
      contract: '0x...',
      tokenId: '2',
      price: '1.8 ETH',
    },
  ]

  return mockNFTs
}
