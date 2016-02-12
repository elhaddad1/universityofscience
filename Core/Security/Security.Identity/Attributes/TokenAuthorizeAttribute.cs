using BL.Interface;
using Repository.UnitOfWorks;
using Security.Identity.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Security.Identity.Attributes
{
    public enum HttpAction : uint
    {
        View = 0,
        Add = 1,
        Edit = 2,
        Delete = 3
    };

    public sealed class TokenAuthorizeAttribute : AuthorizationFilterAttribute
    {
        private string _action = "";

        public TokenAuthorizeAttribute()
        {
        }

        public TokenAuthorizeAttribute(HttpAction action)
        {
            _action = action.ToString();
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var token = "";
            var isUser = false;
            var authorized = false;
            // Context:
            var context = HttpContext.Current;
            if (context != null)
            {
                if (context.Request.Cookies["token"] != null)
                {
                    token = context.Request.Cookies["token"].Value;
                }
            }
            if (!string.IsNullOrWhiteSpace(token))
            {
                // Token:
                SecurityToken _token = null;
                var claims = TokenManager.ReadToken(token, out _token);
                if (_token != null && claims != null)
                {
                    var dep = actionContext.RequestContext.Configuration.DependencyResolver;
                    if (dep != null)
                    {
                        // Authorization:
                        var user = (IUserInfoManager)dep.GetService(typeof(IUserInfoManager));
                        var uow = (IUnitOfWork)dep.GetService(typeof(IUnitOfWork));
                        if (user != null)
                        {
                            user.UserId = Convert.ToInt32(claims.FindFirst(ClaimTypes.UserData).Value);
                            user.EmpId = Convert.ToInt32(claims.FindFirst(ClaimTypes.PrimarySid).Value);
                            user.OrgId = Convert.ToInt32(claims.FindFirst(ClaimTypes.Sid).Value);
                            user.UserName = claims.FindFirst(ClaimTypes.Name) == null ? string.Empty : claims.FindFirst(ClaimTypes.Name).Value;
                            isUser = true;
                            // Permissions:
                            if (uow == null)
                                authorized = true;
                            if (user != null)
                            {
                                var controller = actionContext.ControllerContext.ControllerDescriptor.ControllerName;
                                var action = actionContext.Request.Method.Method;
                                var auz = new Security.Identity.Authorization(user);
                                authorized = auz.CheckUserServerPermission(user.UserId, action);
                            }
                        }
                    }
                }
            }
            else
            {
            }
            if (!isUser || !authorized)
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                actionContext.Response.ReasonPhrase = "You are unauthorized ! Access is denied due to invalid credentials/permissions";
                return;
            }
        }
    }
}
