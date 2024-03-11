import axios from "axios";
import * as cryptoService from "../services/crypto";

function useApi() {
  const baseURL = "https://telemedicine-backend.infinityclinic.co/api";

  const instance = axios.create({ baseURL });
  const jwt = localStorage.getItem('token')
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`

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
