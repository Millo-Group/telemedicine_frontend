import CryptoJS from "crypto-js";

const key = "a9abc2503dd038a0";

export function encrypted(data: string) {
  const result = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
  });
  return result.toString();
}
