using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    /// <summary>
    /// Represents a generic repository interface that provides the basic CRUD operations
    /// </summary>
    /// <typeparam name="T">The type of the model class</typeparam>
    /// <typeparam name="TKey">The type of the primary key for the model class</typeparam>
    public interface IRepository<T, TKey> where T : class
    {
        IQueryable<T> GetAll(Func<T, bool> predicate = null);
        IQueryable<T> Get();
         T Get(Func<T, bool> predicate);

         void Add(T entity);

         void Attach(T entity);

         void Delete(T entity);

    }
}
