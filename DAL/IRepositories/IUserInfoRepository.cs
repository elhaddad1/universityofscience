using CustomModel;
using Repository.Entity;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.IRepositories
{

    public interface IUserInfoRepository : IRepository<SystemUser, int>
    {
        UserInfo GetUserInfo(string userName, string password);
        UserInfo GetUserInfo(int userId);
    }
}
