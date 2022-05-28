import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';

interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
  showLoading?: boolean;
}

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  loading?: ReturnType<typeof ElLoading.service>;
  showLoading: boolean;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? true;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
          });
        }
        console.log('所有的实例都有的拦截器: 请求成功拦截');
        return config;
      },
      (err) => {
        this.loading?.close();
        console.log('所有的实例都有的拦截器: 请求失败拦截');
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        console.log('所有的实例都有的拦截器: 响应成功拦截');
        return res.data;
      },
      (err) => {
        this.loading?.close();
        console.log('所有的实例都有的拦截器: 响应失败拦截');
        return err;
      }
    );
  }

  private request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading === false) {
        this.showLoading = false;
      } else {
        this.showLoading = true;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          this.showLoading = true;
        });
    });
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'get' });
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'post' });
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'delete' });
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'patch' });
  }
}

export default Request;
