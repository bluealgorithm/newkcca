import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../services/api.service";
import { ApplicationData, RegistrationData } from "../types/types";

const apiService = API.getInstance();

// Hook for creating a new application
export function useCreateApplication() {
  return useMutation({
    mutationFn: (applicationData: ApplicationData) =>
      apiService.createApplication(applicationData),
  });
}
// Hook for creating a new registration
export function useCreateRegistration() {
  return useMutation({
    mutationFn: async (registrationData: RegistrationData) =>
      await apiService.createRegistration({ ...registrationData }),
    onSuccess: () => {
      location.href = "/registration";
    },
  });
}
export function useGetApplication(id: string) {
  return useQuery({
    queryKey: ["application", id],
    queryFn: () => apiService.getApplication(id),
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: !!id,
  });
}

export function useGetApplications() {
  return useQuery({
    queryKey: ["applications"],
    queryFn: apiService.getApplications,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}

export function useGetRegistrations() {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: apiService.getRegistrations,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}

export function useGetRegistration(id: string) {
  return useQuery({
    queryKey: ["registration", id],
    queryFn: () => apiService.getRegistration(id),
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: !!id
  });
}


export function useGetPayment(id: string) {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => apiService.getPayment(id),
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}

export function useGetPayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: apiService.getPayments,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
