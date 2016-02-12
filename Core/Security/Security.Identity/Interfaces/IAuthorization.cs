using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Security.Identity.Interfaces
{
    internal interface IAuthorization
    {
        bool CheckUserServerPermission(int userId, string action);
    }
}
