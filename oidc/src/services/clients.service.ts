import { clients } from "../db/memory";

export const get = async (key: string) => clients.get(key);
export const set = async (key: string, value: any) => clients.set(key, value);