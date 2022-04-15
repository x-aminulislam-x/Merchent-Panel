import { apiIns } from "@config/api.config";

interface LoginPayload {
  user_name: string;
  password: string;
}

export const AuthService = {
  login: async (loginPayload: LoginPayload): Promise<any> =>
    await apiIns.post(
      "auth-service/merchant/get-user-store-list",
      loginPayload
    ),
  loginStepTwo: async (loginPayload: LoginPayload): Promise<any> =>
    await apiIns.post("auth-service/merchant/sign-in", loginPayload),
  checkToken: async (): Promise<any> =>
    await apiIns.get("auth-service/merchant/token-validation"),
};
