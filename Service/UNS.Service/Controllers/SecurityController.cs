using ADS.Core.Security.Identity;
using BL;
using BL.Interface;
using CustomModel;
using Security.Identity.Tokens;
using Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace UNS.Service.Controllers
{
    public class SecurityController : ApiController
    {
        private readonly IUserInfoManager _user = null;


        public SecurityController(IUserInfoManager usr)
        {
            _user = usr;

        }


        // GET: api/Security/Login        
        [HttpGet]
        public Token Login([FromUri]string username = "", [FromUri]string password = "")
        {
            if (!string.IsNullOrWhiteSpace(username))
            {
                // Authentication:
                UserInfo user = null;
                var auc = new Authentication(_user);
                // System authentication here.                
                if (auc.Authenticate(out user, username.Trim(), password.Trim()))
                {
                        // Authorization:
                        var perms = user.Action.ToList();
                        // Token                         
                        var token = TokenManager.CreateToken(user, Serialization.SerializeObject(perms));
                        return token;
                }
            }
            return null;
        }

        
    }
}