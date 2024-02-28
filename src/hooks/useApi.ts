import axios from "axios";
import * as cryptoService from "../services/crypto";

function useApi() {
  const baseURL = "http://localhost:8000/api";

  const instance = axios.create({ baseURL });

  instance.interceptors.request.use((config) => {
    if (config.data) {
      const data = cryptoService.encrypted(JSON.stringify(config.data));
      config.data = { data };
    }
    return config;
  });

  return instance;
}

export default useApi;
