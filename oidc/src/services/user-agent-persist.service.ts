import { UserAgent } from "../db/mongodb/models/UserAgent";

export const get = async (key: string) => await UserAgent.findOne({ client_id: key });
export const set = async (key: string, value: any) => await UserAgent.insertMany(value);