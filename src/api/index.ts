import { IResponse } from "@/types/http";
import http from "@/util/http";
const Api = async (url: string) => {
  try {
    const response = await http.request({ url });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export default Api;
