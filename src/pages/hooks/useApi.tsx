import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../services/api.service";
import { AxiosError } from "axios";
import { ApplicationData, RegistrationData, PaymentData } from "../types/types";

const apiService = API.getInstance();

// Hook for creating a new application
export function useCreateApplication() {
  return useMutation({
    mutationFn: (applicationData: ApplicationData) => apiService.createApplication(applicationData),
  });
}
// Hook for creating a new registration
export function useCreateRegistration() {
  return useMutation({
    mutationFn: (registrationData: RegistrationData) => apiService.createRegistration(registrationData),
  });
}

// Hook for getting a single application
export function useGetApplication(id: string) {
  return useQuery({
    queryKey: ["application", id],
    queryFn: () => apiService.getApplication(id),
  });
}

// Hook for getting all applications
export function useGetApplications() {
  return useQuery({
    queryKey: ["applications"],
    queryFn: apiService.getApplications,
  });
}

// Hook for getting all registrations
export function useGetRegistrations() {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: apiService.getRegistrations,
  });
}

// Hook for getting a single payment
export function useGetPayment(id: string) {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => apiService.getPayment(id),
  });
}

// Hook for getting all payments
export function useGetPayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: apiService.getPayments,
  });
}