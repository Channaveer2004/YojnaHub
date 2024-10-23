'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Fingerprint } from 'lucide-react';

export default function Login() {
  const [aadharId, setAadharId] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (aadharId.length === 12) {
        localStorage.setItem('aadharId', aadharId);
        router.push('/dashboard');
      } else {
        toast({
          title: 'Invalid Aadhar ID',
          description: 'Please enter a valid 12-digit Aadhar number',
          variant: 'destructive',
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <Fingerprint className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Login with Aadhar</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700 mb-1">
                Aadhar Number
              </label>
              <Input
                id="aadhar"
                type="text"
                placeholder="Enter your 12-digit Aadhar ID"
                value={aadharId}
                onChange={(e) => setAadharId(e.target.value.replace(/\D/g, '').slice(0, 12))}
                className="w-full"
                maxLength={12}
                pattern="\d{12}"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Continue'}
            </Button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Your data is encrypted and secure. We follow strict privacy guidelines.
        </p>
      </Card>
    </div>
  );
}