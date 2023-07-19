import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'http://localhost:3000',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'angularImplicitClient',
        scope: 'openid profile email',
        responseType: 'id_token token',
        silentRenewUrl: `${window.location.origin}/silent-renew.html`,
        startCheckSession: true,
        silentRenew: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
