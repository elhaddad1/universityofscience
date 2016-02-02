﻿using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        readonly MainDBContext _context = null;

        public UnitOfWork()
        {
            if (this._context == null)
            {
                this._context = new MainDBContext();
                this._context.Configuration.LazyLoadingEnabled = true;
                this._context.Configuration.ProxyCreationEnabled = true;
            }
        }

        public MainDBContext Context
        {
            get
            {
                if (this._context != null)
                {
                    return this._context;
                }
                else
                {
                    throw new ArgumentNullException();
                }
            }
        }


        public void SaveChanges()
        {
            this._context.SaveChanges();
        }

        #region  Dispose
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this._context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion

    }
}
