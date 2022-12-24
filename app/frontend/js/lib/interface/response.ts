type TypeResponseError = { [key: string]: string[] };

export interface ResponseInterface {
  status: number;
  payload: object;
  errors?: TypeResponseError;
}