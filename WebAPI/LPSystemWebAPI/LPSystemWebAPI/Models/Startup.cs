using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using LPSystemWebAPI.Models;

[assembly: OwinStartup(typeof(LPSystemWebAPI.Models.Startup))]

namespace LPSystemWebAPI.Models
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

            // Enable cross origin resource sharing
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,

                // Path of generating the token
                TokenEndpointPath = new PathString("/token"),

                // Setting token expired time (2 hours)
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(2),

                // AuthorizationProvider class will validate the user credentials
                Provider = new AuthorizationProvider()
            };

            // Token generations
            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }
    }
}
