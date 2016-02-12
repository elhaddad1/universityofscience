using BL.Interface;
using CustomModel;
using DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class UserInfoManager: IUserInfoManager
    {
        public enum HttpAction : uint
        {
            View = 0,
            Add = 1,
            Edit = 2,
            Delete = 3
        };

        private readonly IUserInfoRepository _userInfoRepository;

        public UserInfoManager(IUserInfoRepository userInfoRepository)
        {
            this._userInfoRepository = userInfoRepository;
        }

        public int UserId { get; set; }
        public int EmpId { get; set; }
        public int OrgId { get; set; }
        public string UserName { get; set; }
        public UserInfo GetUserInfo(string userName , string password)
        {
            return _userInfoRepository.GetUserInfo(userName , password);
        }
        public UserInfo GetUserInfo(int userId)
        {
            return _userInfoRepository.GetUserInfo(userId);
        }

        public bool CheckUserServerPermission(int userId, string action)
        {
            UserInfo currentUser = GetUserInfo(userId);

            int actionId = (int)HttpAction.View;
            if (action.ToLower().Equals("post"))
                actionId = (int)HttpAction.Add;
            else if (action.ToLower().Equals("put"))
                actionId = (int)HttpAction.Edit;
            else if (action.ToLower().Equals("delete"))
                actionId = (int)HttpAction.Delete;

            return currentUser.Action.Contains(actionId);

        }
    }
}
