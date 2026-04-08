# 🐻 Equxi Vault | Ranger Hackathon Main Track


**A Production-Ready USDC Yield Strategy Built on Solana**


Equxi Vault is a decentralized smart contract utilizing a custom Program Derived Address (PDA) architecture to securely route and manage USDC deposits. By leveraging Kamino Finance's lending markets, the vault targets a sustainable, low-risk **~11.5% APY** with a strict **3-month rolling lock**, explicitly designed for the Ranger "Build-A-Bear" Hackathon.


---


## 🏆 Hackathon Deliverables


* 🎥 **Demo & Pitch Video:** [INSERT_YOUR_YOUTUBE_LINK_HERE]

* 📄 **Strategy & Risk Document:** [Read the full thesis here](./STRATEGY.md)


---


## 🔗 On-Chain Verification (Devnet)

The vault infrastructure has been successfully deployed and verified on the Solana Devnet. The core smart contract successfully handles minting, PDA derivation, and CPI token transfers.


* **Program ID:** `A7GsghKZCyWmYh8Fi5FfH98vUUVGDdLtQGZfBSmhMTjh`

* **Deployment Hash:** [View on Solscan](https://solscan.io/tx/4PaH3JupPDcEPjNiEtXdxFufqbiiCCLnuFxipL5e5mM5fCeoQrQ5o3RK3FZpxx4Q84mMnj2Sh2AWaAVm8CaR3NBb?cluster=devnet)

* **Successful USDC Deposit TX:** [View on Solscan](https://solscan.io/tx/36bGXUTmDWR8nA7BRnogW1dU2RvnsbXDLoWzbbeDvhWYobVvLGNSDf37nHkQTqJfmogVVVrTzRAz32tFi5WVoN3K?cluster=devnet)


---


## ✅ Eligibility Checklist

Equxi Vault adheres strictly to the Presto Labs competition guardrails:

- [x] **Base Asset:** 100% USDC.

- [x] **Minimum APY:** Targets ~11.5% (7.5% Base + 4.0% Protocol Incentives).

- [x] **Tenor:** Enforces a 3-month rolling lock to capture higher-tier, time-weighted reward pools.

- [x] **Clean Yield:** NO Ponzi-like circular yield dependencies.

- [x] **Zero Leverage:** NO high-leverage looping or liquidation risks.

- [x] **No DEX LP Risk:** Pure lending strategy, avoiding impermanent loss.


---


## 💻 Technical Implementation

Built with the **Anchor Framework**, the smart contract ensures production-level security:

1. **PDA Authority:** Funds are never held in vulnerable hot wallets. The vault utilizes `findProgramAddressSync` to derive secure seeds (`[b"vault"]` and `[b"authority"]`).

2. **Cross-Program Invocations (CPI):** Securely interacts with the SPL Token Program to execute trustless transfers between user accounts and the PDA vault.

3. **TypeScript Integration:** Fully functional test suite (`ts-mocha`) verifying real on-chain state changes and PDA derivations.


---


## ⚖️ Risk Management Edge

* **Drawdown Limit:** Hard limit set at 2.0%. 

* **Liquidation Protection:** Fully collateralized lending without leverage completely neutralizes liquidation risks.

* **Rebalancing Logic:** Off-chain keeper network monitors the aggregate yield every 24 hours.


*Built by Sithu Nyein for the Ranger Build-A-Bear Hackathon.*
