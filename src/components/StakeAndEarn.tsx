'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getPoolStats, getUserStake, calculateEarnings } from '@/lib/flaunch-api'

interface PoolStats {
  totalStaked: string
  avgAPY: string
  holders: string
  loading: boolean
}

const StakeAndEarn = () => {
  const [stats, setStats] = useState<PoolStats>({
    totalStaked: '$1.2M',
    avgAPY: '42%',
    holders: '1,500+',
    loading: true,
  })

  const [walletConnected, setWalletConnected] = useState(false)
  const [userStake, setUserStake] = useState('0')
  const [monthlyEarnings, setMonthlyEarnings] = useState('0')

  useEffect(() => {
    // Fetch real pool data from Flaunch API
    const fetchPoolStats = async () => {
      try {
        const poolData = await getPoolStats()
        setStats({
          totalStaked: poolData.totalStaked,
          avgAPY: poolData.avgAPY,
          holders: poolData.holders,
          loading: false,
        })
      } catch (error) {
        console.error('Failed to fetch pool stats:', error)
        setStats(prev => ({ ...prev, loading: false }))
      }
    }

    fetchPoolStats()
  }, [])

  const handleWalletConnect = async () => {
    // Toggle wallet connection
    const newConnectionState = !walletConnected
    setWalletConnected(newConnectionState)

    if (newConnectionState) {
      try {
        // In production: use actual wallet connection (Web3Modal, RainbowKit)
        // const { address } = await connectWallet()
        // const stake = await getUserStake(address)

        // Placeholder simulation
        const stake = 2.5
        const apy = 42
        const earnings = calculateEarnings(stake, apy, 30)

        setUserStake(stake.toString())
        setMonthlyEarnings(earnings.toFixed(2))
      } catch (error) {
        console.error('Failed to fetch user stake:', error)
        setWalletConnected(false)
      }
    } else {
      setUserStake('0')
      setMonthlyEarnings('0')
    }
  }

  const benefitsCards = [
    {
      icon: '💰',
      title: 'High APY Yields',
      description: 'Up to 50%+ APY on staked LPs – rewards auto-compound in $FDH.',
    },
    {
      icon: '🔒',
      title: 'Holder Perks',
      description: 'Exclusive multipliers for $FX1_HUBS/$FDH holders – stake to govern future drops.',
    },
    {
      icon: '📈',
      title: 'Easy Onboarding',
      description: 'Connect wallet, select pool, stake – earn on autopilot. No lockups!',
    },
  ]

  return (
    <section style={{ 
      background: 'linear-gradient(180deg, rgba(5,4,170,0) 0%, rgba(5,4,170,0.8) 80%, #0504AA 100%)',
      padding: '80px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating background elements for visual interest */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 900,
          color: '#FFD700',
          margin: '0 0 16px',
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '-0.02em',
        }}>
          Stake in FX1 Launch Group – Earn $FDH Rewards
        </h2>

        {/* Subheadline */}
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#FFFFFF',
          margin: '0 0 24px',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          Join our Flaunch Group Pool to stake LP tokens from top Base coins and earn exclusive yields. Holders get priority access!
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#FFFFFF',
          maxWidth: '700px',
          margin: '0 auto 48px',
          lineHeight: '1.6',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          As an FX1 Digital Hubs holder, stake your LP positions in our curated group pool on Flaunch.gg. Earn dynamic APY on $FDH, plus bonuses for long-term liquidity provision. Powered by Base – low fees, high rewards.<br /><br />
          <strong>Supported Pools:</strong> $FDH/ETH, $FX1_HUBS/USDC, and more
        </p>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          margin: '64px 0',
        }}>
          {benefitsCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '2px solid #FFD700',
                borderRadius: '16px',
                padding: '32px 24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(255, 215, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
              }}>
                {card.icon}
              </div>
              <h4 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#0504AA',
                margin: '0 0 12px',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                {card.title}
              </h4>
              <p style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#333333',
                margin: 0,
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: '1.5',
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          margin: '64px 0',
          padding: '32px 24px',
          background: 'rgba(255, 215, 0, 0.08)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
        }}>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0 0 8px',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Total Staked
            </p>
            <p style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#FFD700',
              margin: 0,
              fontFamily: 'Montserrat, sans-serif',
            }}>
              {stats.totalStaked}
            </p>
          </div>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0 0 8px',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Avg APY
            </p>
            <p style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#FFD700',
              margin: 0,
              fontFamily: 'Montserrat, sans-serif',
            }}>
              {stats.avgAPY}
            </p>
          </div>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0 0 8px',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Holders Earning
            </p>
            <p style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#FFD700',
              margin: 0,
              fontFamily: 'Montserrat, sans-serif',
            }}>
              {stats.holders}
            </p>
          </div>
        </div>

        {/* Wallet Connection & Personal Stats */}
        {walletConnected && (
          <div style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '16px',
            padding: '24px',
            margin: '32px 0',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}>
            <p style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>
              Your Position: <span style={{ color: '#FFD700', fontSize: '18px', fontWeight: 700 }}>{userStake} $FDH</span>
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>
              Potential Monthly Earnings: <span style={{ color: '#FFD700', fontSize: '16px', fontWeight: 700 }}>~${monthlyEarnings}</span>
            </p>
          </div>
        )}

        {/* Primary CTA Button */}
        <a
          href="https://flaunch.gg/base/group/0x50ec14dc217daae2f7f3fc4c86836e0f3a52dde4"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            width: '100%',
            maxWidth: '400px',
            padding: '18px 32px',
            background: '#FFD700',
            color: '#0504AA',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '16px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 16px 32px rgba(255, 215, 0, 0.4)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          Stake Now on Flaunch
        </a>

        {/* Secondary CTA Button */}
        <button
          style={{
            display: 'inline-block',
            width: '100%',
            maxWidth: '400px',
            padding: '16px 32px',
            background: 'transparent',
            color: '#FFD700',
            fontSize: '16px',
            fontWeight: 700,
            border: '2px solid #FFD700',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'Montserrat, sans-serif',
          }}
          onClick={() => window.open('https://flaunch.gg/base/group/0x50ec14dc217daae2f7f3fc4c86836e0f3a52dde4', '_blank')}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255, 215, 0, 0.1)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent'
          }}
        >
          View All Coins
        </button>

        {/* Wallet Connect Button */}
        <div style={{
          marginTop: '32px',
        }}>
          <button
            onClick={handleWalletConnect}
            style={{
              padding: '12px 24px',
              background: walletConnected ? 'rgba(0, 200, 100, 0.2)' : 'rgba(255, 215, 0, 0.15)',
              color: walletConnected ? '#00FF88' : '#FFD700',
              border: `2px solid ${walletConnected ? '#00FF88' : '#FFD700'}`,
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Montserrat, sans-serif',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '0.8'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '1'
            }}
          >
            {walletConnected ? '✓ Wallet Connected' : 'Connect Wallet to Stake'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default StakeAndEarn
