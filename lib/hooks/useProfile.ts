import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProfile, updateProfile } from '@/lib/api';
import type { Database } from '@/types/database';

export function useProfile() {
  const queryClient = useQueryClient();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const { mutate: updateProfileMutation } = useMutation({
    mutationFn: (updates: Database['public']['Tables']['profiles']['Update']) =>
      updateProfile(updates),
    onSuccess: (newProfile) => {
      queryClient.setQueryData(['profile'], newProfile);
    },
  });

  return {
    profile,
    isLoading,
    error,
    updateProfile: updateProfileMutation,
  };
}