'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Award, Calendar, IndianRupee, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { generateDashboardData } from '@/lib/utils/schemes';
import type { DashboardData } from '@/types/schemes';

export default function Dashboard() {
  const [userData, setUserData] = useState<{ aadharId: string | null }>({ aadharId: null });
  const [dashboardData, setDashboardData]:any = useState<DashboardData | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const aadharId = localStorage.getItem('aadharId');
    if (!aadharId) {
      router.push('/login');
    } else {
      setUserData({ aadharId });
      setDashboardData(generateDashboardData(aadharId));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('aadharId');
    router.push('/');
  };

  const handleSchemeAction = (scheme: typeof dashboardData.schemes[0]) => {
    if (scheme.status === 'Applied') {
      toast({
        title: 'Application Status',
        description: `Your application for ${scheme.name} is being processed. Please check your email for updates.`,
      });
    } else {
      window.open(scheme.applicationUrl, '_blank', 'noopener,noreferrer');
      toast({
        title: 'Redirecting to Application Portal',
        description: `You're being redirected to the official ${scheme.name} portal. Please ensure you have all required documents ready.`,
      });
    }
  };

  if (!userData.aadharId || !dashboardData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Aadhar ID: XXXX-XXXX-{userData.aadharId.slice(-4)}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Eligible Schemes</p>
                <p className="text-2xl font-bold">{dashboardData.stats.eligibleSchemes}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <IndianRupee className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total Benefits</p>
                <p className="text-2xl font-bold">{dashboardData.stats.totalBenefits}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Active Applications</p>
                <p className="text-2xl font-bold">{dashboardData.stats.activeApplications}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Family Members</p>
                <p className="text-2xl font-bold">{dashboardData.stats.familyMembers}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Eligible Schemes</h2>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {dashboardData.schemes.map((scheme: any) => (
                <Card key={scheme.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{scheme.name}</h3>
                    <Badge variant={scheme.status === 'Applied' ? 'secondary' : 'default'}>
                      {scheme.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{scheme.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-600 font-semibold">{scheme.amount}</span>
                    <span className="text-gray-500">
                      Deadline: {scheme.deadline}
                    </span>
                  </div>
                  <Button 
                    className="mt-4 w-full" 
                    variant={scheme.status === 'Applied' ? 'outline' : 'default'}
                    onClick={() => handleSchemeAction(scheme)}
                  >
                    {scheme.status === 'Applied' ? 'View Application' : 'Apply Now'}
                  </Button>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}