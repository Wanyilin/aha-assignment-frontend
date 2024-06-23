export enum ApiSource {
  MIRAGE = 'mirage',
  REAL = 'real',
}

export const API_BASE_URLS = {
  [ApiSource.MIRAGE]: 'http://localhost:3000/api',
  [ApiSource.REAL]: 'https://avl-frontend-exam.herokuapp.com/api',
};

export const DEFAULT_API_SOURCE: ApiSource = ApiSource.REAL;
