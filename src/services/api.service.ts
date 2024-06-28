import axios from "axios";
import { ApplicationData, PaymentData } from "../pages/types/types";

class API {
  private static baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  private static instance: API;

  private constructor() {}

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

  async createPayment(paymentData: PaymentData) {
    const { id, ...restOfData } = paymentData;
    const payment = await axios.post(
      `${API.baseURL}/payment/${paymentData.id}`,
      restOfData
    );
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
