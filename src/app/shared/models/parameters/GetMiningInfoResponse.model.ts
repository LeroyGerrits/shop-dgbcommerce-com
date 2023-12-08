import { GetDifficultyResponseDifficulties } from "./GetDifficultyResponseDifficulties.model";

export class GetMiningInfoResponse {
    Blocks!: number;
    CurrentBockSize!: number;
    CurrentBlockTx!: number;
    Difficulty!: number;
    Errors?: string[];
    GenProcLimit!: number;
    NetworkHashPS!: bigint;
    PooledTx!: number;
    Testnet!: boolean;
    Chain?: string[];
    Generate!: boolean;
    HashesPerSec!: number;
}