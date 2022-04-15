import { apiIns } from "@config/api.config";

interface ICategoryPayload {
  name: string;
  parentId: string;
}

export const AuthService = {
  createCategory: async (payload: ICategoryPayload): Promise<any> =>
    await apiIns.post(
      "product-category/create",
      payload
    ),
};
