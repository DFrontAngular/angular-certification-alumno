export type OptionId = 'A' | 'B' | 'C' | 'D';
export type Difficulty = 'Básico' | 'Medio' | 'Alto';

export interface AssessmentOption {
  readonly id: OptionId;
  readonly text: string;
}

export interface AssessmentQuestion {
  readonly id: string;
  readonly area: string;
  readonly difficulty: Difficulty;
  readonly prompt: string;
  readonly code?: string;
  readonly options: readonly AssessmentOption[];
  readonly correctOption?: OptionId;
  readonly explanation?: string;
}

export interface CandidateAnswer {
  readonly option?: OptionId;
  readonly reason?: string;
}
