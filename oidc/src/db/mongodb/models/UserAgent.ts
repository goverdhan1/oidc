import mongoose, { Schema } from "mongoose";

const UserAgentSchema = new Schema({
  key: { type: String, required: true },
  payload: { type: Object, required: true },
  expiresAt: { type: Date, required: true },
});

UserAgentSchema.index(
  { key: 1, "payload.kind": 1 },
  {
    unique: true,
  }
);

UserAgentSchema.index(
  { "payload.uid": 1 },
  {
    unique: true,
    partialFilterExpression: { "payload.kind": "Session" },
  }
);

UserAgentSchema.index(
  { "payload.grantId": 1 },
  {
    unique: true,
    partialFilterExpression: {
      "payload.kind": {
        $in: [
          "AccessToken",
          "AuthorizationCode",
          "RefreshToken",
          "DeviceCode",
          "BackchannelAuthenticationRequest",
        ],
      },
    },
  }
);

UserAgentSchema.index(
  { "payload.userCode": 1 },
  {
    unique: true,
    partialFilterExpression: { "payload.kind": "DeviceCode" },
  }
);

UserAgentSchema.index(
  { expiresAt: 1 },
  {
    expireAfterSeconds: 0,
  }
);

export const UserAgent = mongoose.model<any>("UserAgent", UserAgentSchema);
