import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";
import { getItem, storeItem } from "../Store/AsyncStorage";
import SecureStore from "../Store/SecureStore";

const apiClient = create({ baseURL: "https://9de9-102-89-47-44.ngrok-free.app/api" });

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await SecureStore.getItem("token");
  if (!token) return;
  if (request.headers) request.headers["x-auth-token"] = token;
});

const get = apiClient.get;

apiClient.get = async <T, U = T>(
  url: string,
  params?: {},
  axiosConfig?: AxiosRequestConfig
): Promise<ApiResponse<T, U>> => {
  const response = (await get(url, params, axiosConfig)) as ApiResponse<T, U>;

  if (response.ok) {
    await storeItem(url, response.data);
    return response;
  }

  const data = await getItem(url);
  return data ? ({ ok: true, data } as ApiResponse<T, U>) : response;
};

export default apiClient;
