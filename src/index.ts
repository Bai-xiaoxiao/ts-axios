/* 
axios本身是一个方法，可以使用，返回一个promise
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

也可以方便的使用
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

可以添加默认配置，发挥一个axios实例，具备axios的方法
var api = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
 */
import {
  funConfigType,
  getParams,
  createConfig,
  simpleObj,
} from "./types/axiosFun";
import req from "./core/request";
const axios = (config: funConfigType) => {
  return req(config);
};
axios.get = (url: string, param?: getParams) => {
  return req({
    method: "get",
    url,
    data: param ? param.params : undefined,
  });
};
class Axios {
  baseURL?: string;
  timeout?: number;
  headers?: simpleObj;

  constructor(props: createConfig) {
    const { baseURL, timeout, headers } = props;
    this.baseURL = baseURL;
    this.timeout = timeout;
    this.headers = headers;
  }

  get(url: string, param?: getParams) {
    const { baseURL } = this;
    return req({
      method: "get",
      url: baseURL ? `${baseURL}${url}` : url,
      data: param ? param.params : undefined,
    });
  }
}
axios.create = (config: createConfig) => {
  return new Axios(config);
};
document.querySelector("#req")?.addEventListener("click", () => {
  const api = axios.create({
    baseURL: "https://mock.mengxuegu.com",
    timeout: 3000,
    headers: {
      "X-TOKEN": 123123,
    },
  });
  console.log(api);
  api
    .get("/mock/605b180b0d58b864da03d869/example/mock", {
      params: {
        xxx: 1,
      },
    })
    .then((res) => {
      console.log(res);
    });
  return;
  axios({
    method: "post",
    url: "https://mock.mengxuegu.com/mock/605b180b0d58b864da03d869/example/upload",
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get(
      "https://mock.mengxuegu.com/mock/605b180b0d58b864da03d869/example/mock"
    )
    .then((res) => {
      console.log(res);
    });
});

export default axios;
