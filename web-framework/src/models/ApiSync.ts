import axios, { AxiosPromise } from "axios";

export class ApiSync<T> {
  constructor(public rootUrl: string) {}

  fetch = (id?: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  };
  save = (data: T): AxiosPromise => {
    return axios.post(this.rootUrl, data);
  };
}
