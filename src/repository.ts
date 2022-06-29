import restApi from './config';
import { User } from './user.types';

const QUANTITY = 1000;

export const repository = {
  getUsers: async () => {
    const response = await restApi.get<{
      results: User[];
      info: { seed: string; results: number; page: number; version: string };
    }>(`/api?results=${QUANTITY}`);
    if (response.status === 200) {
      return response.data.results;
    }
    return [];
  },
};
