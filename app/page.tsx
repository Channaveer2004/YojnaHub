import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GanttChartSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <GanttChartSquare className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Schemes Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover government schemes and benefits available to you through your Aadhar ID
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Check Your Eligibility</h2>
            <p className="text-gray-600 mb-6">
              Login with your Aadhar ID to view schemes and benefits you're eligible for.
            </p>
            <Link href="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Login with Aadhar
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Browse All Schemes</h2>
            <p className="text-gray-600 mb-6">
              Explore all available government schemes and their eligibility criteria.
            </p>
            <Link href="/schemes">
              <Button variant="outline" className="w-full">
                View All Schemes
              </Button>
            </Link>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Login Securely</h4>
              <p className="text-gray-600">Use your Aadhar ID for secure authentication</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">View Eligibility</h4>
              <p className="text-gray-600">Get personalized scheme recommendations</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Apply Online</h4>
              <p className="text-gray-600">Submit applications directly through the portal</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}