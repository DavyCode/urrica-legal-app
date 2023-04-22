import configEnv from "config";
/**
 * TIPS
 * Read up some react tips for improving performance
 * https://www.freecodecamp.org/news/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e/
 */

import axios from "axios";
import AuthModule from "../modules/auth.module";

type payload = {
  url: string;
  method: string;
  data?: any;
  signal?: any;
  params?: any;
  headers?: any;
};
/**
 * Helper for calling axios services
 */
const axiosService = async ({ url, method, data, signal, params, headers }: payload): Promise<any> => {
  return await axios({
    method,
    url,
    ...(params && { params }),
    ...(signal && { cancelToken: signal }),
    ...(data && { data }),
    headers: headers
      ? headers
      : {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          ...(AuthModule.getToken() && {
            Authorization: `Bearer ${AuthModule.getToken()}`,
          }),
        },
  });
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lgtk");
  }
  return null;
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;
export const clientService = axios.create({
  baseURL: configEnv.BASE_API_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    Authorization: getAuthorizationHeader(),
  },
});

export default axiosService;
