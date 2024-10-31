import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GanttChartSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <GanttChartSquare className="h-16 w-16 text-blue-700" />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-wide">
            Government Schemes Portal
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover government schemes and benefits available to you through your Aadhar ID
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-2xl transition-shadow rounded-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-4">Check Your Eligibility</h2>
            <p className="text-gray-600 mb-6">
              Login with your Aadhar ID to view schemes and benefits you're eligible for.
            </p>
            <Link href="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
                Login with Aadhar
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-2xl transition-shadow rounded-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-4">Browse All Schemes</h2>
            <p className="text-gray-600 mb-6">
              Explore all available government schemes and their eligibility criteria.
            </p>
            <Link href="/schemes">
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-100 transition duration-300 ease-in-out">
                View All Schemes
              </Button>
            </Link>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-2">Login Securely</h4>
              <p className="text-gray-600">Use your Aadhar ID for secure authentication</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-2">View Eligibility</h4>
              <p className="text-gray-600">Get personalized scheme recommendations</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">3</span>
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
