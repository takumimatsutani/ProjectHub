import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';

/**
 * API URLの環境設定
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
const TOKEN_KEY = 'token';

/**
 * 認証関連のユーティリティ
 */
const AuthUtils = {
  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  handleUnauthorized(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TOKEN_KEY);
    // ログインページへリダイレクト
    window.location.href = '/login';
  }
};

/**
 * API クライアントクラス
 */
class ApiClient {
  private static instance: AxiosInstance;

  /**
   * ApiClientのシングルトンインスタンスを取得
   */
  public static getInstance(): AxiosInstance {
    if (!ApiClient.instance) {
      const config: AxiosRequestConfig = {
        baseURL: API_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      ApiClient.instance = axios.create(config);

      // クライアントサイドでのみインターセプターを設定
      if (typeof window !== 'undefined') {
        // リクエストインターセプター - 認証トークンの追加
        ApiClient.instance.interceptors.request.use(
          (config) => {
            const token = AuthUtils.getToken();
            if (token && config.headers) {
              config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
          },
          (error: AxiosError) => Promise.reject(error)
        );

        // レスポンスインターセプター - エラーハンドリング
        ApiClient.instance.interceptors.response.use(
          (response: AxiosResponse) => response,
          (error: AxiosError) => {
            // 認証エラー（401）の処理
            if (error.response?.status === 401) {
              AuthUtils.handleUnauthorized();
            }
            return Promise.reject(error);
          }
        );
      }
    }

    return ApiClient.instance;
  }
}

export default ApiClient.getInstance();