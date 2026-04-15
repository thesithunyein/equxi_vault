Equxi Vault: AI-Driven Yield Strategy Documentation
Base Asset: USDC
Target Tenor: 3-Month Rolling Lock
Target APY: 22% - 28%

1. Strategy Thesis & Edge (AI Integration)
Equxi Vault is an AI-optimized lending aggregator. Standard vaults suffer from rate decay as liquidity shifts. Equxi solves this by utilizing an off-chain TypeScript AI Keeper that analyzes historical emission volatility to predict optimal yield routes. The Keeper dynamically rebalances USDC via CPI across Solana protocols (Kamino, Marginfi) to capture the highest transient yields.

2. APY Mechanics (Targeting ~25%)
To achieve top-tier yield without directional market risk, the vault utilizes Conservative Stablecoin Looping (USDC/PYUSD).
* Base Action: Supply USDC, Borrow PYUSD, Swap to USDC, Resupply.
* Projected Yield: ~25% APY generated from aggressive PYUSD protocol emissions and Kamino lending incentives. 

3. Risk Management & Guardrails
Equxi strictly adheres to the hackathon safety requirements. 
* Health Factor: Hardcoded to maintain a 1.40 HF (well above the 1.05 disqualification limit).
* Price Risk: Zero. Strategy only interacts with 1:1 pegged stablecoins (USDC/PYUSD), neutralizing liquidation from price swings.
* No DEX LPs / Junior Tranches: Purely over-collateralized lending.
* Rebalancing: The AI Keeper monitors the health factor every 60 minutes, automatically deleveraging if the HF drops below 1.35.