using CustomModel;
using Repository.Entity;
using System;
using System.Threading.Tasks;

namespace Security.Identity.Interfaces
{
    internal interface IAuthentication
    {
        bool Authenticate(out UserInfo user, string username, string password = "");
    }
}