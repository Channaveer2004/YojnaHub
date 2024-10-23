import { IndianScheme } from '@/types/schemes';

// Scheme pool with more variety
const schemePool: IndianScheme[] = [
  {
    id: 1,
    name: 'PM Kisan Samman Nidhi',
    description: 'Direct income support for farmers',
    amount: '₹6,000 per year',
    deadline: '2024-12-31',
    category: 'Agriculture',
    applicationUrl: 'https://pmkisan.gov.in/',
  },
  {
    id: 2,
    name: 'Ayushman Bharat',
    description: 'Healthcare coverage for families',
    amount: '₹5,00,000 coverage',
    deadline: 'Open',
    category: 'Healthcare',
    applicationUrl: 'https://mera.pmjay.gov.in/',
  },
  {
    id: 3,
    name: 'PM Awas Yojana',
    description: 'Housing assistance for eligible families',
    amount: '₹2,50,000',
    deadline: '2024-06-30',
    category: 'Housing',
    applicationUrl: 'https://pmaymis.gov.in/',
  },
  {
    id: 4,
    name: 'National Pension Scheme',
    description: 'Government-backed pension scheme',
    amount: 'Variable',
    deadline: 'Open',
    category: 'Pension',
    applicationUrl: 'https://enps.nsdl.com/',
  },
  {
    id: 5,
    name: 'Sukanya Samriddhi Yojana',
    description: 'Savings scheme for girl child',
    amount: '₹1,50,000 per year',
    deadline: 'Open',
    category: 'Education',
    applicationUrl: 'https://www.indiapost.gov.in/',
  },
  {
    id: 6,
    name: 'PM Mudra Yojana',
    description: 'Loans for small businesses',
    amount: 'Up to ₹10,00,000',
    deadline: 'Open',
    category: 'Business',
    applicationUrl: 'https://www.mudra.org.in/',
  },
];

export function generateDashboardData(aadharId: string) {
  // Use aadharId to generate consistent random values
  const hash = Array.from(aadharId).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Generate random number of schemes (2-4)
  const numSchemes = 2 + (hash % 3);
  
  // Shuffle and select schemes
  const shuffledSchemes = [...schemePool]
    .sort(() => (hash * Date.now()) % 2 - 1)
    .slice(0, numSchemes)
    .map(scheme => ({
      ...scheme,
      status: Math.random() > 0.7 ? 'Applied' : 'Eligible'
    }));

  // Calculate total benefits
  const totalBenefits = shuffledSchemes.reduce((total, scheme) => {
    const amount = scheme.amount.match(/₹([\d,]+)/);
    if (amount) {
      const value = parseInt(amount[1].replace(/,/g, ''));
      return total + (value > 10000 ? value : value * 12);
    }
    return total;
  }, 0);

  // Generate dashboard stats
  return {
    schemes: shuffledSchemes,
    stats: {
      eligibleSchemes: shuffledSchemes.length,
      totalBenefits: `₹${(totalBenefits / 100000).toFixed(1)}L`,
      activeApplications: shuffledSchemes.filter(s => s.status === 'Applied').length,
      familyMembers: 2 + (hash % 4),
    }
  };
}