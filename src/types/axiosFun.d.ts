export interface simpleObj {
  [propName: string | number]: any;
}

export interface getParams {
  params?: simpleObj;
}

export interface funConfigType {
  method: "post" | "get";
  url: string;
  data?: simpleObj;
  timeout?: number;
}

export interface createConfig {
  baseURL?: string;
  timeout?: number;
  headers?: simpleObj;
}
