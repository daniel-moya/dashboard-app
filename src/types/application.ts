export type Applicant = {
  id: number;
  name: string;
  email: string;
}

export type RiskScore = 'Low' | 'Average' | 'High' | null;
export type Status = 'Approved' | 'Processing' | 'Invited';
type ScanType = 'Alscan1' | 'Alscan2';


export type Application = {
  id: number;
  created: string;
  applicant: Applicant;
  type: ScanType;
  riskScore: RiskScore;
  status: Status;
}
