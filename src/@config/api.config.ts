import { LocalStorageService } from "@services/utils/localstorage.service";
import axios from "axios";
import { ENV } from "./ENV.config";

const instance = axios.create({
  baseURL: ENV.ApiEndpoint,
});
// TODO:: currently is not working
// instance.defaults.headers.common["Authorization"] = `Bearer ${
//   LocalStorageService.get("accessToken") || "dsdsd"
// }`;

instance.interceptors.request.use(
  (config) => {
    const accessToken = LocalStorageService.get("accessToken") || null;
    const uid = LocalStorageService.get("uid");
    if (accessToken && uid) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.uid = uid;
    }
    return config;
  },
  (error) => {
    if (error.response) {
      return Promise.reject({
        ...error.response.data,
        ...{ status: error.response.data.status || error.status },
      });
    }

    return Promise.reject({
      body: false,
      status: 404,
      message: "server not responding",
    });
  }
);

instance.interceptors.response.use(
  (res: any) => {
    if (res.data.status === 200) return { ...res.data };
    if (res.data.status === 401) {
    }

    return Promise.reject({
      body: res.data.body,
      status: res.data.status,
      message: res.data.message,
    });
  },
  (error) => {
    if (error.response) {
      const { config, response } = error;
      const originalRequest = config;
      let isAlreadyFetchingAccessToken = false;
      // if (response && response.status === 401) {
      //   if (!isAlreadyFetchingAccessToken) {
      //     isAlreadyFetchingAccessToken = true;
      //     refreshToken().then((res: any) => {
      //       isAlreadyFetchingAccessToken = false;
      //       // Update accessToken in localStorage
      //       setToken(res.data.accessToken);
      //       setRefreshToken(res.data.refreshToken);
      //     });
      //   }
      //   const retryOriginalRequest = new Promise((resolve) => {
      //     resolve(instance(originalRequest));
      //   });
      //   return retryOriginalRequest;
      //   // window.location.href = "/login";
      // }

      return Promise.reject({
        ...error.response.data,
        ...{ status: error.response.data.status || error.status },
      });
    } else {
      return Promise.reject({
        status: 404,
        message: "server not responding",
        body: {},
      });
    }
  }
);

const refreshToken = () => {
  return instance.post("/auth/refresh-token");
};
const setToken = (accessToken: string) => {
  LocalStorageService.set("accessToken", accessToken);
};
const setRefreshToken = (refreshToken: string) => {
  LocalStorageService.set("refreshToken", refreshToken);
};

export const apiIns = instance;
