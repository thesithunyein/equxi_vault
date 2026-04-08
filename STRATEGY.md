Equxi Vault: Strategy & Risk Documentation
Base Asset: USDC
Target Tenor: 3-Month Rolling Lock

1. Strategy Thesis & Edge
Equxi Vault is designed to generate sustainable, low-risk yield on USDC deposits by supplying liquidity to Kamino Finance lending markets. Our edge lies in our automated smart contract architecture, which utilizes a dedicated Program Derived Address (PDA) to securely hold funds while interacting with Kamino via Cross-Program Invocations (CPI). This ensures funds are never held in a vulnerable hot wallet.

2. APY & Yield Mechanics (Targeting >10%)
To meet the 10% APY minimum over our 3-month lockup tenor, the vault aggregates two yield sources:
* Base Yield: ~7.5% APR from organic lending interest.
* Incentive Yield: ~4.0% APR from Kamino protocol token emissions.
Total Target APY: ~11.5%. By enforcing a 3-month lock, the vault avoids short-term capital flight, allowing us to deploy into higher-tier reward pools without liquidity crunches.

3. Risk Management & Drawdown Limits
The vault strictly adheres to the hackathon's safety guardrails. We do not use Ponzi-like circular yield, junior tranches, DEX LP vaults, or high-leverage looping. 
* Drawdown Limit: We maintain a hard drawdown limit of 2.0%. 
* Liquidation Protection: Since this is a fully collateralized USDC lending strategy without leverage, liquidation risk is completely neutralized.
* Rebalancing Logic: The off-chain keeper network monitors the vault every 24 hours, executing a rebalance or withdrawing to base USDC if the aggregate APY drops below 10.0%.
