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

export type Attributes = {
  firstName: string;
  lastName: string;
  email: string;
}

export type RiskScoring = {
  currentCategory: RiskScore
}

export type Application = {
  id: string;
  createdAt: string;
  attributes: Attributes;
  type: string;
  riskScoring: RiskScoring;
  statusName: string;
  currentStatus: number;
}


