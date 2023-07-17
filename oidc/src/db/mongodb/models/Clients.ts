import mongoose, { Schema } from "mongoose";

const ClientSchema = new Schema({
    client_id: {
    type: String,
    unique: true,
  },
  client_secret: String,
  redirect_uris: [],
  response_types: [],
  grant_types: [],
  scope: String
});

export const Clients = mongoose.model<any>("Client", ClientSchema);