import originalAxios , {AxiosInstance} from 'axios';
import { MetaHTMLAttributes } from 'react';

export const csrfToken = (): string =>{
  const meta = <HTMLElement>document.querySelector('meta[name=csrf-token]');

  return meta['content'];
};

export const axios = (): AxiosInstance => {
  const token = csrfToken();
  const customAxios = originalAxios.create({
    timeout: 30000,
    headers: {
      'X-CSRF-Token': token,
    },
  });
  customAxios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response.status == 401) {
      alert('読み込みに失敗しました。ページを再読み込みして下さい。')
      return;
    }

    alert('読み込みに失敗しました。')
    return;
  });
  return customAxios;
};
