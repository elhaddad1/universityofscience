using Repository.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    /// <summary>
    /// An implementation for the <code>IGenericRepository</code> interface, it supports the basic CRUD operations
    /// using Entity Framework 6
    /// </summary>
    /// <typeparam name="T">The type of the model class</typeparam>
    /// <typeparam name="TKey">The type of the primary key for the model class</typeparam>
    // ReSharper disable once InconsistentNaming
    public abstract class EFRepository<T, TKey> : Repository.Interface.IRepository<T, TKey>
        where T : class
    {
        protected readonly IUnitOfWork _unitOfWork;
        readonly protected DbSet<T> _objectSet;

        public EFRepository(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _objectSet = _unitOfWork.Context.SetDbSet<T>();
        }
        public IQueryable<T> GetAll(Func<T, bool> predicate = null)
        {
            if (predicate != null)
            {
                return _objectSet.Where(predicate).AsQueryable();
            }

            return _objectSet.AsQueryable();
        }

        public T Get(Func<T, bool> predicate)
        {
            return _objectSet.First(predicate);
        }

        public IQueryable<T> Get()
        {
            return _objectSet.AsQueryable();
        }

        public void Add(T entity)
        {
            _objectSet.Add(entity);
        }

        public void Attach(T entity)
        {
            _objectSet.Attach(entity);
        }

        public void Delete(T entity)
        {
            _objectSet.Remove(entity);
        }

    }
}
