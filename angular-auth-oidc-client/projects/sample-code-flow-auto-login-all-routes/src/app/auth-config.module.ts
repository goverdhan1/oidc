import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: LogLevel.Debug,
        historyCleanupOff: true,
        authority: 'http://localhost:3000',
        redirectUrl: `${window.location.origin}/home`,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'app2',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
