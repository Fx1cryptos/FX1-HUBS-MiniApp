import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { metaMask, phantom } from 'wagmi/connectors'

export const wagmiConfig = createConfig({
  chains: [base, baseSepolia],
  connectors: [
    metaMask(),
    phantom(),
  ],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
})
