import axios from "axios";
import { ApplicationData, RegistrationData, PaymentData } from "../types/types";

class API {
  private static baseURL = process.env.BASE_URL;
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
    const register = await axios.post(`${API.baseURL}/register`, registrationData);
    return register;
  }

  async createPayment(paymentData: PaymentData) {
    const payment = await axios.post(`${API.baseURL}/payment`, paymentData);
    return payment;
  }

  async getApplication() {
    const applications = await axios.get(`${API.baseURL}/apply/id`);
    return applications;
  }
  async getApplications() {
    const applications = await axios.get(`${API.baseURL}/apply`);
    return applications;
  }
}

export default API;

