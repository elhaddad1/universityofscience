using CustomModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Interface
{
    public interface IUserInfoManager
    {

        int UserId { get; set; }
        int EmpId { get; set; }
        int OrgId { get; set; }
        string UserName { get; set; }
        UserInfo GetUserInfo(string userName, string password);
        UserInfo GetUserInfo(int userId);

        bool CheckUserServerPermission(int userId, string action);
    }
}
