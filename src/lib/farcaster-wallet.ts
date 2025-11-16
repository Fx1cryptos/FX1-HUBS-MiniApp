// Farcaster + Base Wallet Connection Service
import { sdk } from '@farcaster/miniapp-sdk'

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
      on?: (event: string, callback: (...args: unknown[]) => void) => void
    }
  }
}

export interface WalletUser {
  farcasterUsername?: string
  baseAddress?: string
  walletType: 'farcaster' | 'base' | 'connected'
  isConnected: boolean
}

export interface FDHBalance {
  balance: string
  usdValue: string
}

export interface Fx1HubsBalance {
  balance: string
  usdValue: string
}

// Farcaster Connection
export const connectFarcaster = async (): Promise<WalletUser | null> => {
  try {
    // Initialize Farcaster SDK
    await sdk.actions.ready()

    // Get user context
    const context = await sdk.context

    if (context.user) {
      return {
        farcasterUsername: context.user.username,
        walletType: 'farcaster',
        isConnected: true,
      }
    }

    return null
  } catch (error) {
    console.log('Farcaster connection not available (outside frame context)')
    return null
  }
}

// Base Wallet Connection (MetaMask/WalletConnect)
export const connectBase = async (): Promise<WalletUser | null> => {
  try {
    if (!window.ethereum) {
      throw new Error('No Ethereum provider found. Please install MetaMask.')
    }

    const accounts = (await window.ethereum.request({
      method: 'eth_requestAccounts',
    })) as string[]

    if (accounts && accounts.length > 0) {
      return {
        baseAddress: accounts[0],
        walletType: 'base',
        isConnected: true,
      }
    }

    return null
  } catch (error) {
    console.error('Error connecting Base wallet:', error)
    return null
  }
}

// Check if wallet is already connected
export const checkWalletConnection = async (): Promise<WalletUser | null> => {
  try {
    // Try Farcaster first
    const farcasterUser = await connectFarcaster()
    if (farcasterUser) {
      return farcasterUser
    }

    // Try Base wallet
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (accounts && accounts.length > 0) {
        return {
          baseAddress: accounts[0],
          walletType: 'base',
          isConnected: true,
        }
      }
    }

    return null
  } catch (error) {
    console.log('No wallet connected')
    return null
  }
}

// Get token balances from Alchemy API
export const getTokenBalances = async (
  address: string
): Promise<{ fdh: FDHBalance; fx1Hubs: Fx1HubsBalance } | null> => {
  try {
    const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
    if (!alchemyKey) {
      throw new Error('Alchemy API key not found')
    }

    const response = await fetch(
      `https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'alchemy_getTokenBalances',
          params: [
            address,
            [
              '0x1f85705d939bb6fa1aebe99d7105adcee75ce380', // $FDH on Base
              '0x24c42adfb620f3835fcb31fbdf3c1773fac76970', // $fx1_hubs on Zora
            ],
          ],
          id: 1,
        }),
      }
    )

    const data = await response.json()

    if (data.result) {
      return {
        fdh: {
          balance: data.result.tokenBalances[0]?.tokenBalance || '0',
          usdValue: '0', // Would calculate from price API
        },
        fx1Hubs: {
          balance: data.result.tokenBalances[1]?.tokenBalance || '0',
          usdValue: '0',
        },
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching token balances:', error)
    return null
  }
}

// Disconnect wallet
export const disconnectWallet = (): void => {
  // Clear any stored wallet data
  if (typeof window !== 'undefined') {
    localStorage.removeItem('walletConnected')
    localStorage.removeItem('walletAddress')
  }
}

// Switch to Base network
export const switchToBaseNetwork = async (): Promise<boolean> => {
  try {
    if (!window.ethereum) {
      throw new Error('No Ethereum provider found')
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x2105' }], // Base mainnet
    })

    return true
  } catch (error) {
    console.error('Error switching network:', error)
    return false
  }
}
