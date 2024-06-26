import axios from "axios";
import * as cryptoService from "../services/crypto";

function useApi() {
  const baseURL = "https://telemedicine-backend.infinityclinic.co/api";
  // const baseURL = "http://127.0.0.1:8000/api";
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Cache-Control": "no-cache",
  };
  const instance = axios.create({ baseURL, headers });
  const jwt = localStorage.getItem("token");
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`;

  instance.interceptors.request.use((config) => {
    if (config.data) {
      const data = cryptoService.encrypted(JSON.stringify(config.data));
      config.data = { data };
    }
    return config; 
  });

  return instance;
}

export{ useApi};
