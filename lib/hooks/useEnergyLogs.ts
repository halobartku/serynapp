import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getEnergyLogs, createEnergyLog } from '@/lib/api';
import type { Database } from '@/types/database';

export function useEnergyLogs(limit?: number) {
  const queryClient = useQueryClient();

  const { data: logs, isLoading, error } = useQuery({
    queryKey: ['energyLogs', limit],
    queryFn: () => getEnergyLogs(limit),
  });

  const { mutate: createLog } = useMutation({
    mutationFn: (log: Database['public']['Tables']['energy_logs']['Insert']) =>
      createEnergyLog(log),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['energyLogs'] });
    },
  });

  return {
    logs,
    isLoading,
    error,
    createLog,
  };
}