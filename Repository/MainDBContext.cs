
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.Interface;
using System.Data.Entity;
using System.Linq.Expressions;

namespace Repository
{
    public class MainDBContext: USSCEntities, IMainDBContext
    {
        protected readonly USSCEntities _dbContext;

        public MainDBContext()
        {
            _dbContext = new USSCEntities();
        }

    }
}
