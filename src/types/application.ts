export type Applicant = {
  id: number;
  name: string;
  email: string;
}

export type RiskScore = 'low' | 'medium' | 'high' | null;
export type Status = 'Approved' | 'Ready For Review' | 'Rejected' | 'In Progress';

export type IdVerification = {
  dynamic: boolean;
  sendDocument: boolean;
  sendDocumentBackside: boolean;
  sendSelfieWithDocument: boolean;
};

export type Overrides = {
  required: Array<any>;
};

export type Attribute = {
  addedByUser: boolean;
  description: string;
  idVerification: IdVerification;
  isAdditional: boolean;
  label: string;
  optional: boolean;
  overrides: Overrides;
  schemaId: string;
  valid: boolean;
  value: string;
  weight: number;
  _id: string;
}

export type RiskScoring = {
  currentCategory: RiskScore
}

export type Application = {
  id: string;
  createdAt: string;
  attributes: Array<Attribute>;
  type: string;
  riskScoring: RiskScoring;
  statusName: string;
  currentStatus: number;
}


