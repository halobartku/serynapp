import { useEnergyLogs } from '@/lib/hooks/useEnergyLogs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function EnergyGraph() {
  const { logs, isLoading } = useEnergyLogs(30); // Last 30 entries

  if (isLoading) return <div>Loading...</div>;
  if (!logs) return null;

  const data = logs.map(log => ({
    date: new Date(log.created_at).toLocaleDateString(),
    energy: log.energy_level,
    activity: log.activity_type
  }));

  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[1, 10]} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="#4F46E5" 
            strokeWidth={2}
            dot={{ fill: '#4F46E5' }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}