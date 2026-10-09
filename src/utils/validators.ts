import { z } from 'zod';

export const verifyBody = z.object({
  // Soroban contract IDs are 32-byte StrKey contract addresses (C...).
  contractId: z.string().regex(/^C[A-Z2-7]{55}$/, 'invalid Soroban contract ID'),
  network: z.enum(['testnet', 'mainnet', 'futurenet']),
  rustVersion: z.string().regex(/^\d+\.\d+\.\d+$/, 'invalid Rust version').optional(),
}).strict();
