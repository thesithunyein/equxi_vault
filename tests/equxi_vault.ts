import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { EquxiVault } from "../target/types/equxi_vault";
import { createMint } from "@solana/spl-token";

describe("equxi_vault", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.EquxiVault as Program<EquxiVault>;

  it("Initializes the vault with a real mint!", async () => {
    const payer = (provider.wallet as anchor.Wallet).payer;
    
    console.log("Creating a real USDC Mint on-chain...");
    const usdcMint = await createMint(
      provider.connection, payer, provider.wallet.publicKey, null, 6
    );
    
    // Your Rust code uses PDAs (seeds = [b"vault"] and [b"authority"])
    // We must derive them here so they match the blockchain exactly!
    const [vaultUsdcAccount] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      program.programId
    );
    
    const [vaultAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("authority")],
      program.programId
    );
    
    console.log("Sending initialize transaction...");
    const tx = await program.methods
      .initialize()
      .accounts({
        user: provider.wallet.publicKey,
        usdcMint: usdcMint,
        vaultUsdcAccount: vaultUsdcAccount,
        vaultAuthority: vaultAuthority,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .rpc();
      
    console.log("SUCCESS! Transaction Signature:", tx);
  });
});
