using CustomModel;
using DAL.IRepositories;
using Repository;
using Repository.Entity;
using Repository.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{

    public class UserInfoRepository : EFRepository<SystemUser, int>, IUserInfoRepository
    {
        public UserInfoRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {

        }


        public UserInfo GetUserInfo(string userName , string password)
        {
            UserInfo userData = new UserInfo();
            var user = this.Get(a => a.Password.Equals(password, StringComparison.OrdinalIgnoreCase) && a.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
            if (user == null)
                return null;

            userData.Password = user.Password;
            userData.UserName = user.UserName;
            userData.FullName = user.FullName;

            var role = this._unitOfWork.Context.UserRoles.Where(a => a.UserId == user.Id).OrderBy(a => a.RoleId).LastOrDefault();

            userData.Role = role.RoleId;

            userData.Action = this._unitOfWork.Context.SystemRoleActions.Where(a => a.RoleId == role.RoleId).Select(a => a.ActionId).ToList();

            return userData;
        }



        public UserInfo GetUserInfo(int userId)
        {
            UserInfo userData = new UserInfo();
            var user = this.Get(a => a.Id == userId);
            if (user == null)
                return null;

            userData.Password = user.Password;
            userData.UserName = user.UserName;
            userData.FullName = user.FullName;

            var role = this._unitOfWork.Context.UserRoles.Where(a => a.UserId == user.Id).OrderBy(a => a.RoleId).LastOrDefault();

            userData.Role = role.RoleId;

            userData.Action = this._unitOfWork.Context.SystemRoleActions.Where(a => a.RoleId == role.RoleId).Select(a => a.ActionId).ToList();

            return userData;
        }

    }
}
