# 🐻 Equxi Vault | Ranger Hackathon Main Track

**An AI-Driven, ~25% APY USDC Yield Strategy Built on Solana**

Equxi Vault is a decentralized smart contract utilizing a custom Program Derived Address (PDA) architecture paired with an **Off-Chain AI Keeper**. By dynamically predicting rate shifts and executing safe stablecoin looping (USDC/PYUSD) on Kamino Finance, the vault targets a sustainable **~25% APY** with a strict **3-month rolling lock**, explicitly designed to win the Ranger "Build-A-Bear" Hackathon.

---

## 🏆 Hackathon Deliverables

* 🎥 **Demo & Pitch Video:** [Watch on YouTube](I will update here)
* 📄 **Strategy & Risk Document:** [Read the full AI strategy thesis here](./STRATEGY.md)
* 🤖 **AI Keeper Logic:** [Review the TypeScript prediction engine](./keeper.ts)

---

## 🔗 On-Chain Verification (Devnet)
The vault infrastructure has been successfully deployed and verified on the Solana Devnet. The core smart contract handles minting, secure PDA derivation, and CPI token transfers.

* **Program ID:** `A7GsghKZCyWmYh8Fi5FfH98vUUVGDdLtQGZfBSmhMTjh`
* **Deployment Hash:** [View on Solscan](https://solscan.io/tx/4PaH3JupPDcEPjNiEtXdxFufqbiiCCLnuFxipL5e5mM5fCeoQrQ5o3RK3FZpxx4Q84mMnj2Sh2AWaAVm8CaR3NBb?cluster=devnet)
* **Successful USDC Deposit TX:** [View on Solscan](https://solscan.io/tx/36bGXUTmDWR8nA7BRnogW1dU2RvnsbXDLoWzbbeDvhWYobVvLGNSDf37nHkQTqJfmogVVVrTzRAz32tFi5WVoN3K?cluster=devnet)

---

## ✅ Eligibility & Risk Guardrails (100% Compliant)
Equxi Vault adheres strictly to the Presto Labs competition rules, specifically engineering around the leverage limits:
- [x] **Base Asset:** 100% USDC.
- [x] **Target APY:** ~25% (Generated via USDC/PYUSD looping and Kamino emissions).
- [x] **Tenor:** Enforces a 3-month rolling lock to capture higher-tier, time-weighted reward pools.
- [x] **Clean Yield:** NO Ponzi-like circular yield dependencies.
- [x] **Safe Looping (Beating the 1.05 Rule):** The AI Keeper hardcodes the Health Factor at **1.40** (massively above the 1.05 disqualification limit).
- [x] **No Price Risk:** Strategy only interacts with 1:1 pegged stablecoins, neutralizing liquidation from price swings.

---

## 💻 Technical Implementation
Equxi bridges cutting-edge off-chain intelligence with on-chain Anchor security:

1. **The AI Keeper (TypeScript):** An off-chain node that continuously analyzes historical emission volatility across Solana lending protocols, triggering CPI rebalances when yield spreads widen.
2. **PDA Authority (Rust/Anchor):** Funds are never held in vulnerable hot wallets. The vault utilizes `findProgramAddressSync` to derive secure seeds (`[b"vault"]` and `[b"authority"]`).
3. **Cross-Program Invocations (CPI):** Trustless transfers between user accounts and the PDA vault.
4. **Institutional Security (Cobo MPC):** To protect the AI Keeper from key-compromise and MEV front-running, all off-chain rebalancing transactions require a threshold signature via Cobo's Multi-Party Computation (MPC) infrastructure.
5. **Vault Dashboard:** A minimalist React frontend designed for institutional capital managers to monitor real-time health factors and AI routing paths.

---

## ⚖️ Risk Management Edge
* **Health Factor Floor:** AI Keeper automatically deleverages if the HF drops below 1.35.
* **Drawdown Limit:** Hard limit set at 2.0%. 
* **Zero Impermanent Loss:** Pure stablecoin lending and borrowing strategy, strictly avoiding DEX LP tokens (like JLP/HLP).

*Built by Sithu Nyein for the Ranger Build-A-Bear Hackathon.*