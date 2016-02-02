using BL.Interface;
using DAL;
using DAL.Interface;
using Repository.Entity;
using Repository.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SubjectManager : ISubjectManager
    {
        private readonly ISubjectRepository _subjectRepository;

        public SubjectManager(ISubjectRepository leaveRepository)
        {
            this._subjectRepository = leaveRepository;
        }

        public IQueryable<Subject> Get()
        {
            return _subjectRepository.GetAll();
        }

    }
}
