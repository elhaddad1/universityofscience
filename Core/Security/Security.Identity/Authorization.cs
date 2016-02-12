using BL.Interface;
using Repository.UnitOfWorks;
using Security.Identity.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Security.Identity
{
    public sealed class Authorization : IAuthorization
    {
        private readonly IUserInfoManager _user = null;
        public Authorization(IUserInfoManager usr)
        {
            _user = usr;
        }

        public bool CheckUserServerPermission(int userId, string action)
        {
            return _user.CheckUserServerPermission(userId, action);
        }
    }
}
