﻿using System;
using Microsoft.Extensions.DependencyInjection;
using Polly;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace SignInWithoutSpecifyingTenant.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignInWithoutSpecifyingTenantHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SignInWithoutSpecifyingTenantConsoleApiClientModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<AbpHttpClientBuilderOptions>(options =>
            {
                options.ProxyClientBuildActions.Add((remoteServiceName, clientBuilder) =>
                {
                    clientBuilder.AddTransientHttpErrorPolicy(
                        policyBuilder => policyBuilder.WaitAndRetryAsync(3, i => TimeSpan.FromSeconds(Math.Pow(2, i)))
                    );
                });
            });
        }
    }
}
