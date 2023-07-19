import { userAgent } from "../db/memory";

export const get = async (key: string) => userAgent.get(key);
export const set = async (key: string, value: any) => userAgent.set(key, value);