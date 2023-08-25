import axios from "axios";
import { AxiosRequestConfig } from "axios/index";
import { ApiConstanst, EnumGet, EnumPost } from "@/app/api";
import { toast } from "react-toastify";
import { store } from "@/app/store";
import { createDialog } from "@/components/dialogUtils";

type ExtraOptions = {
  hideLoading: boolean;
  downloading: boolean;
  skipNotify: boolean;
};

export type Mehothd = "GET" | "POST";
type OmitProperty = "method" | "data" | "params";
export type OptionsConfig = Partial<
  Omit<AxiosRequestConfig & ExtraOptions, OmitProperty>
>;
export type ResponseType<T> = {
  code: string | number;
  message: string;
  data: T;
};
export type GetConstants = ApiConstanst<typeof EnumGet>;
export type PostConstants = ApiConstanst<typeof EnumPost>;
class RequestInstance {
  private instance: ReturnType<typeof axios.create>;
  private hideLoading: boolean = false;
  private downloading?: boolean = false;
  private skipNotify?: boolean = false;
  constructor() {
    const service = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 15000, // request timeout
    });
    service.defaults.withCredentials = false;

    // request interceptor
    service.interceptors.request.use(
      (request) => {
        if (!this.hideLoading) {
          console.log("loading", this.hideLoading);
        }
        // do something before request is sent
        if (store.getState().user.token) {
          request.headers["X-Token"] = store.getState().user.token;
        }
        return request;
      },
      (error) => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
      }
    );

    // 响应拦截
    service.interceptors.response.use(
      (res) => {
        // 如果是下载文件直接返回
        if (this.downloading) {
          return res;
        }
        const { message, isNeedUpdateToken, updateToken, code } = res.data;
        // 更新token保持登录状态
        if (isNeedUpdateToken) {
          console.log(updateToken);
          // setToken(updateToken);
        }
        const successCode = "0,200,20000";
        if (successCode.includes(code + "")) {
          return res.data;
        } else {
          if (code === 401 || code == 4001) {
            createDialog({
              title: "Hint",
              description:
                "You have been logged out, you can cancel to remain on the page, or log in again",
              confirmButtonText: "Re-login",
              cancelButtonText: "Cancel",
            });
          } else {
            if (!this.skipNotify) {
              toast.error(message, {
                toastId: res.config.url,
                autoClose: 2000,
              });
            }
          }

          return Promise.reject(res);
        }
      },
      (err) => {
        /* http错误处理，处理跨域，404，401，500*/
        toast.error("Network Error", {
          toastId: JSON.stringify(err),
        });
        // 如果是跨域
        // Network Error,cross origin

        return Promise.reject(err);
      }
    );
    this.instance = service;
  }

  GET<T>(key: GetConstants, data: unknown, option?: OptionsConfig) {
    this.hideLoading = option?.hideLoading || false;
    this.downloading = option?.downloading || false;
    const url = EnumGet[key];
    return this.instance<T>({
      url,
      params: data as OptionsConfig,
      method: "GET",
      ...option,
    });
  }
  POST<T>(key: PostConstants, data: unknown, option?: OptionsConfig) {
    this.hideLoading = option?.hideLoading || false;
    this.downloading = option?.downloading || false;
    const url = EnumPost[key];
    return this.instance<T>({
      url,
      data: data as OptionsConfig,
      method: "POST",
      ...option,
    });
  }
}

const service = new RequestInstance();
export default service;
