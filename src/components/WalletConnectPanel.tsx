'use client'

import { useState, useEffect } from 'react'
import {
  connectFarcaster,
  connectBase,
  checkWalletConnection,
  getTokenBalances,
  disconnectWallet,
  WalletUser,
  FDHBalance,
  Fx1HubsBalance,
} from '@/lib/farcaster-wallet'
import Button from './Button'
import Card from './Card'

export default function WalletConnectPanel() {
  const [user, setUser] = useState<WalletUser | null>(null)
  const [balances, setBalances] = useState<{ fdh: FDHBalance; fx1Hubs: Fx1HubsBalance } | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    const connectedUser = await checkWalletConnection()
    if (connectedUser) {
      setUser(connectedUser)
      if (connectedUser.baseAddress) {
        const userBalances = await getTokenBalances(connectedUser.baseAddress)
        setBalances(userBalances)
      }
    }
  }

  const handleConnectFarcaster = async () => {
    setIsLoading(true)
    try {
      const farcasterUser = await connectFarcaster()
      if (farcasterUser) {
        setUser(farcasterUser)
        setShowDropdown(false)
      }
    } catch (error) {
      console.error('Error connecting Farcaster:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleConnectBase = async () => {
    setIsLoading(true)
    try {
      const baseUser = await connectBase()
      if (baseUser) {
        setUser(baseUser)
        const userBalances = await getTokenBalances(baseUser.baseAddress!)
        setBalances(userBalances)
        setShowDropdown(false)
      }
    } catch (error) {
      console.error('Error connecting Base wallet:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = () => {
    disconnectWallet()
    setUser(null)
    setBalances(null)
    setShowDropdown(false)
  }

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  if (user && user.isConnected) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="btn-3d-primary px-4 py-2 text-sm flex items-center gap-2"
        >
          <span>✅ Connected</span>
          {user.baseAddress && <span className="text-xs">{formatAddress(user.baseAddress)}</span>}
          {user.farcasterUsername && <span className="text-xs">@{user.farcasterUsername}</span>}
        </button>

        {showDropdown && (
          <div className="card-3d absolute right-0 mt-2 w-64 p-4 z-50">
            <h3 className="font-bold text-sm mb-4 text-gray-900">Connected Wallet</h3>

            {user.baseAddress && (
              <div className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-xs text-gray-600 mb-1">Base Address</p>
                <p className="font-mono text-sm text-gray-900 break-all">{user.baseAddress}</p>
              </div>
            )}

            {user.farcasterUsername && (
              <div className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-xs text-gray-600 mb-1">Farcaster</p>
                <p className="font-mono text-sm text-gray-900">@{user.farcasterUsername}</p>
              </div>
            )}

            {balances && (
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="text-xs text-gray-600 mb-1">$FDH Balance</p>
                  <p className="font-bold text-lg text-gray-900">{balances.fdh.balance}</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-xs text-gray-600 mb-1">$fx1_hubs Balance</p>
                  <p className="font-bold text-lg text-gray-900">{balances.fx1Hubs.balance}</p>
                </div>
              </div>
            )}

            <button
              onClick={handleDisconnect}
              className="w-full px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-900 font-semibold transition-colors"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="btn-3d-primary px-6 py-2 text-sm font-bold"
        disabled={isLoading}
      >
        {isLoading ? 'Connecting...' : 'Connect Wallet'}
      </button>

      {showDropdown && (
        <div className="card-3d absolute right-0 mt-2 w-56 p-4 z-50">
          <h3 className="font-bold text-sm mb-4 text-gray-900">Select Wallet</h3>

          <button
            onClick={handleConnectFarcaster}
            disabled={isLoading}
            className="w-full mb-3 p-3 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 border border-purple-300 text-gray-900 font-semibold transition-all disabled:opacity-50"
          >
            🎭 Farcaster
          </button>

          <button
            onClick={handleConnectBase}
            disabled={isLoading}
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 border border-blue-300 text-gray-900 font-semibold transition-all disabled:opacity-50"
          >
            ⚪ Base Wallet
          </button>

          <p className="text-xs text-gray-600 mt-4 text-center">
            Connect your wallet to access exclusive features
          </p>
        </div>
      )}
    </div>
  )
}
