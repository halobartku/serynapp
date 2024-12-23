import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '@/components/common/Navbar';

const queryClient = new QueryClient();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  );
}