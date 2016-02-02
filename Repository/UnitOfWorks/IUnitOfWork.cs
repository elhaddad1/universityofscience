using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.UnitOfWorks
{
    public interface IUnitOfWork : IDisposable
    {
        MainDBContext Context{get;}
        void SaveChanges();

    }
}
