import { Clients } from "../db/mongodb/models/Clients"

export const get = async (key: string) => await Clients.findOne({ client_id: key });
export const set = async (key: string, value: any) => await Clients.insertMany(value);