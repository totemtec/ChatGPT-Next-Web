import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TokenStore {
  type: string;
  token: string;
  expires: number;
  getServerToken: () => string;
}

export const SERVER_TOKEN_UPDATE_KEY = "server-token";

function queryMeta(key: string, defaultValue?: string): string {
  let ret: string;
  if (document) {
    const meta = document.head.querySelector(
      `meta[name='${key}']`,
    ) as HTMLMetaElement;
    ret = meta?.content ?? "";
  } else {
    ret = defaultValue ?? "";
  }

  return ret;
}

export const useTokenStore = create<TokenStore>()(
  persist(
    (set, get) => ({
        type: 'bearer',
        token: '',
        expires: 0,

        getServerToken() {
        set(() => ({ token: queryMeta("token") }));

        const expired = Date.now() - get().expires;
        if (expired) {
            return "";
        }

        return get().token ?? "";
      },
    }),
    {
      name: SERVER_TOKEN_UPDATE_KEY,
      version: 1,
    },
  ),
);
