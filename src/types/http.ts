export interface IResponse {
  code: number;
  message?: string;
  [param: string]: any;
}
