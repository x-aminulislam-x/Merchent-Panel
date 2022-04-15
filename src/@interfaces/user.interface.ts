export interface IUserData {
  id: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  menu?: string;
  store_id: string;
  phone?: string;
  session_no?: string;
  partner_code?: string;
  store_name: string;
  store_domain: string;
  store_subdomain: string;
  role_id: string;
  role_name: string;
  ip?: string;
}

export interface IUserInfo {
  user_data: IUserData;
  accessToken: string;
}
