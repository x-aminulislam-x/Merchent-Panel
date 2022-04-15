export const isBrowser = typeof window !== "undefined";
export const isServer = typeof window == "undefined";

export const LocalStorageService = {
  set: (key: string, value: any): void => localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string): string | null => JSON.parse(localStorage.getItem(key)),
  delete: (key: string): void => localStorage.removeItem(key),
  clear: (): void => localStorage.clear(),
};
