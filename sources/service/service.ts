// src/service/apiService.ts
import instance from './instance';

export default {
  async getAll(urlF: string, params: Record<string, any> = {}): Promise<any> {
    return await instance.get(urlF, { params });
  },

  async postAll(urlF: string, credentials: any): Promise<any> {
    return await instance.post(urlF, credentials);
  },

  async deleteAll(id: string | number, urlF: string): Promise<any> {
    try {
      return await instance.post(`${urlF}${id}`);
    } catch (error) {
      throw error;
    }
  },

  async showById(id: string | number, urlF: string): Promise<any> {
    return await instance.get(`${urlF}${id}`);
  },

  async update(credentials: any, urlF: string): Promise<string> {
    return await instance.post(urlF, credentials);
  },

  async nextPage(page: number): Promise<any> {
    try {
      return await instance.get(`news?page=${page}`);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getByParams(urlF: string, id: any): Promise<any> {
    return await instance.post(urlF, id);
  },
};
