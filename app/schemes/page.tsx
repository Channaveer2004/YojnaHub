import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';

const categories = [
  'All',
  'Agriculture',
  'Education',
  'Healthcare',
  'Housing',
  'Employment',
];

const schemes = [
  {
    id: 1,
    name: 'PM Kisan Samman Nidhi',
    description: 'Income support of ₹6,000 per year for farmer families',
    category: 'Agriculture',
    eligibility: 'Small and marginal farmers',
    benefits: '₹6,000 per year in three installments',
    documents: ['Aadhar Card', 'Land Records', 'Bank Account Details'],
  },
  {
    id: 2,
    name: 'Ayushman Bharat',
    description: 'Comprehensive healthcare coverage for families',
    category: 'Healthcare',
    eligibility: 'Low-income families',
    benefits: 'Up to ₹5,00,000 coverage per family per year',
    documents: ['Aadhar Card', 'Income Certificate', 'Ration Card'],
  },
  {
    id: 3,
    name: 'PM Awas Yojana',
    description: 'Housing assistance for eligible families',
    category: 'Housing',
    eligibility: 'Families without pucca house',
    benefits: 'Financial assistance up to ₹2,50,000',
    documents: ['Aadhar Card', 'Income Certificate', 'Land Documents'],
  },
  {
    id: 4,
    name: 'National Scholarship Portal',
    description: 'Scholarships for students',
    category: 'Education',
    eligibility: 'Students with family income below ₹8,00,000',
    benefits: 'Varies by scholarship scheme',
    documents: ['Aadhar Card', 'Income Certificate', 'Academic Records'],
  },
  {
    id: 5,
    name: 'Startup India',
    description: 'Support for startups through tax benefits and funding',
    category: 'Entrepreneurship',
    eligibility: 'Startups registered under DPIIT',
    benefits: 'Tax exemption and funding opportunities',
    documents: ['Aadhar Card', 'Startup Registration Certificate', 'Bank Account Details'],
  },
  {
    id: 6,
    name: 'Stand-Up India',
    description: 'Loans to women and SC/ST entrepreneurs',
    category: 'Entrepreneurship',
    eligibility: 'SC/ST or women entrepreneurs',
    benefits: 'Loans from ₹10,00,000 to ₹1 crore',
    documents: ['Aadhar Card', 'Business Plan', 'Caste Certificate'],
  },
  {
    id: 7,
    name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    description: 'Employment guarantee for rural households',
    category: 'Employment',
    eligibility: 'Adult members of rural households',
    benefits: '100 days of wage employment per year',
    documents: ['Aadhar Card', 'Job Card', 'Bank Account Details'],
  },
  {
    id: 8,
    name: 'Swachh Bharat Abhiyan',
    description: 'Campaign for sanitation and cleanliness',
    category: 'Public Welfare',
    eligibility: 'Open to all citizens',
    benefits: 'Incentives for toilet construction',
    documents: ['Aadhar Card', 'Household Survey Report'],
  },
  {
    id: 9,
    name: 'Digital India',
    description: 'Promoting digital infrastructure and services',
    category: 'Technology',
    eligibility: 'Open to all citizens',
    benefits: 'Access to digital services and subsidies',
    documents: ['Aadhar Card', 'Email ID', 'Mobile Number'],
  },
  {
    id: 10,
    name: 'Atal Pension Yojana',
    description: 'Pension scheme for unorganized sector workers',
    category: 'Finance',
    eligibility: 'Citizens aged 18-40 years',
    benefits: 'Pension of ₹1,000 to ₹5,000 per month',
    documents: ['Aadhar Card', 'Bank Account Details', 'Nominee Details'],
  },
];


export default function Schemes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Government Schemes</h1>
          <p className="text-gray-600">
            Browse through all available government schemes and their eligibility criteria
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search schemes..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <Tabs defaultValue="All" className="space-y-4">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-[600px]">
                <div className="grid md:grid-cols-2 gap-6">
                  {schemes
                    .filter((scheme) => category === 'All' || scheme.category === category)
                    .map((scheme) => (
                      <Card key={scheme.id} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{scheme.name}</h3>
                          <Badge>{scheme.category}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{scheme.description}</p>
                        
                        <div className="space-y-3 mb-4">
                          <div>
                            <h4 className="font-semibold mb-1">Eligibility</h4>
                            <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Benefits</h4>
                            <p className="text-sm text-gray-600">{scheme.benefits}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Required Documents</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                              {scheme.documents.map((doc, index) => (
                                <li key={index}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <Button className="w-full">Check Eligibility</Button>
                      </Card>
                    ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}