using Autofac;
using Autofac.Integration.WebApi;
using DIService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace UNS.Service
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            // DI - dependency injection
            // Autofac
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            // Register all api controllers
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly()).AsSelf();
            // Register business objects            
            builder = ServiceRegistry.Register(builder);
            config.DependencyResolver = new AutofacWebApiDependencyResolver(builder.Build());
        }
    }
}
