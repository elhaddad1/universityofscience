using DAL.Interface;
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
    public class SubjectRepository : EFRepository<Subject, long>, ISubjectRepository
    {
        public SubjectRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {

        }


    }
}
