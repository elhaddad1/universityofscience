using BL.Interface;
using CustomModel;
using Repository.Entity;
using Security.Identity.Interfaces;
using Support;
using System;
using System.Threading.Tasks;

namespace ADS.Core.Security.Identity
{
    public sealed class Authentication : IAuthentication
    {
        private readonly IUserInfoManager _user = null;

        public Authentication(IUserInfoManager usr)
        {
            _user = usr;
        }

        public bool Authenticate(out UserInfo user, string username, string password = "")
        {
            if (!string.IsNullOrWhiteSpace(password))
            {
                // Authenticate user login here.
                user = _user.GetUserInfo(username, password);
                if (user != null)
                {
                    return true;
                }
            }
            user = null;
            return false;
        }
        public UserInfo Authenticate(int userid)
        {
            return _user.GetUserInfo(userid);
        }

    }
}