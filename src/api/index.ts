import { IResponse } from "@/types/http";
import http from "@/util/http";
const Api = async (url: string): Promise<IResponse> => {
  const response = await http.request({ url });
  return response.data;
};

export default Api;
