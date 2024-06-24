import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../services/api.service";
import { ApplicationData, PaymentData } from "../pages/types/types";

const apiService = API.getInstance();

// Hook for creating a new application
export function useCreateApplication() {
  return useMutation({
    mutationFn: (applicationData: ApplicationData) =>
      apiService.createApplication(applicationData),
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

export function useCreatePayment() {
  return useMutation({
    mutationFn: async (paymentData: PaymentData) =>
      await apiService.createPayment({ ...paymentData }),
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
