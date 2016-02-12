using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomModel
{
    public class UserInfo
    {
        public string UserName { get; set; }
        public List<int?> Action { get; set; }
        public int? Role { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }

    }
}
