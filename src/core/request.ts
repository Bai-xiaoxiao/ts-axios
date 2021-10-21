import { funConfigType } from "../types/axiosFun";
const request = function (config: funConfigType) {
  return new Promise((resolve, reject) => {
    const { method, url, data } = config;

    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url);

    xhr.timeout = config.timeout || 5000;

    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(JSON.parse(xhr.response));
      }
      if (xhr.status !== 200) {
        reject(xhr);
      }
    };
  });
};

export default request;
