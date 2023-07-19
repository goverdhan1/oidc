import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'http://localhost:3000',
        redirectUrl: window.location.origin + '/protected',
        postLogoutRedirectUri: window.location.origin,
        clientId: 'app1',
        scope: 'openid profile email taler_api offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        // triggerRefreshWhenIdTokenExpired: false,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
