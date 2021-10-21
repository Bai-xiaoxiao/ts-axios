import { funConfigType } from "../types/axiosFun";
// interface reqInterceptors: () => void;
const request = (fun: Function) => {
  return fun();
};
const resbonse = () => {};
const interceptors = {
  request,
  resbonse,
};

export default interceptors;
