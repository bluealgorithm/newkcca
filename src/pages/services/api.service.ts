import axios from "axios";
import { ApplicationData, RegistrationData, PaymentData } from "../types/types";

class API {
  private static baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  private static instance: API;

  private constructor() { }

  public static getInstance(): API {
    if (!API.instance) {
      API.instance = new API();
    }
    return API.instance;
  }

  async createApplication(applicationData: ApplicationData) {
    const apply = await axios.post(`${API.baseURL}/apply`, applicationData);
    
    return apply;
  }

  async createRegistration(registrationData: RegistrationData) {
    const { id, ...restOfData } = registrationData;

    const register = await axios.post(`${API.baseURL}/registration/${registrationData.id}`, { ...restOfData });
    return register;
  }

  async createPayment(paymentData: PaymentData) {
    const payment = await axios.post(`${API.baseURL}/payment`, paymentData);
    return payment;
  }

  async getApplication(id: string) {
    const application = await axios.get(`${API.baseURL}/apply/${id}`);
    return application;
  }

  async getApplications() {
    const applications = await axios.get(`${API.baseURL}/apply`);
    return applications;
  }

  async getRegistration(id: string) {
    const registration = await axios.get(`${API.baseURL}/registration/${id}`);
    return registration;
  }

  async getRegistrations() {
    const registrations = await axios.get(`${API.baseURL}/registration`);
    return registrations;
  }

  async getPayment(id: string) {
    const getPayment = await axios.get(`${API.baseURL}/payment/${id}`);
    return getPayment;
  }

  async getPayments() {
    const getPayments = await axios.get(`${API.baseURL}/payment`);
    return getPayments;
  }
}

export default API;