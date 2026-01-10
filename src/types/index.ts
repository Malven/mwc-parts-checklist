export interface Part {
  name: string;
  qty: number;
  fasteners: string;
  buyLocation: string;
}

export interface Category {
  name: string;
  parts: Part[];
}

export type PartState = Record<string, number>;

export type FilterType = 'all' | 'have' | 'missing';

export interface SummaryPart {
  name: string;
  have?: number;
  needed: number;
}

export interface SummaryData {
  totalNeeded: number;
  totalHave: number;
  totalMissing: number;
  haveParts: SummaryPart[];
  missingParts: SummaryPart[];
}
