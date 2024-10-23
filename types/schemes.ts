export interface IndianScheme {
  id: number;
  name: string;
  description: string;
  amount: string;
  deadline: string;
  category: string;
  applicationUrl: string;
  status?: 'Eligible' | 'Applied';
}

export interface DashboardStats {
  eligibleSchemes: number;
  totalBenefits: string;
  activeApplications: number;
  familyMembers: number;
}

export interface DashboardData {
  schemes: IndianScheme[];
  stats: DashboardStats;
}