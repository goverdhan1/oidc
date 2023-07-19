export const accounts = new Map();

accounts.set("raj", {
  username: "raj",
  password: "raj12",
  email: "raj12@gmail.com",
  emailVerified: false,
});

export const clients = new Map();

clients.set("app", {
  client_id: "app",
  client_secret: "scorpion",
  redirect_uris: ["http://localhost:3005/cb"],
  grant_types: [
    "authorization_code",
    "password",
    "refresh_token",
    "client_credentials",
  ],
  scope: "openid email profile phone address offline_access api:read",
})

export const userAgent = new Map();

userAgent.set("userAgent", {
  key: 1,
  payload: { },
  expiresAt: "" 
})