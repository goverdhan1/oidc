import { LogLevel } from '../logging/log-level';
import { OpenIdConfiguration } from './openid-configuration';

export const DEFAULT_CONFIG: OpenIdConfiguration = {
  authority: 'http://localhost:3000',
  authWellknownEndpointUrl: '',
  authWellknownEndpoints: null,
  redirectUrl: 'http://localhost:4204/callback',
  clientId: 'app1',
  responseType: 'code',
  scope: 'openid email profile',
  hdParam: '',
  postLogoutRedirectUri: 'http://localhost:4204',
  startCheckSession: false,
  silentRenew: false,
  silentRenewUrl: 'http://localhost:4204',
  silentRenewTimeoutInSeconds: 20,
  renewTimeBeforeTokenExpiresInSeconds: 0,
  useRefreshToken: false,
  usePushedAuthorisationRequests: false,
  ignoreNonceAfterRefresh: false,
  postLoginRoute: '/',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
  autoUserInfo: true,
  autoCleanStateAfterAuthentication: true,
  triggerAuthorizationResultEvent: false,
  logLevel: LogLevel.Warn,
  issValidationOff: false,
  historyCleanupOff: false,
  maxIdTokenIatOffsetAllowedInSeconds: 120,
  disableIatOffsetValidation: false,
  customParamsAuthRequest: {},
  customParamsRefreshTokenRequest: {},
  customParamsEndSessionRequest: {},
  customParamsCodeRequest: {},
  disableRefreshIdTokenAuthTimeValidation: false,
  triggerRefreshWhenIdTokenExpired: true,
  tokenRefreshInSeconds: 4,
  refreshTokenRetryInSeconds: 3,
  ngswBypass: false,
};