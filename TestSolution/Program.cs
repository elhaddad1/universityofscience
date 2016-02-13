using Autofac;
using BL;
using DIService;
using Repository.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestSolution
{
    class Program
    {


        private static IContainer _autofacContainer;
        protected static IContainer AutofacContainer
        {
            get
            {
                if (_autofacContainer == null)
                {
                    var builder = new ContainerBuilder();

                    builder = ServiceRegistry.Register(builder);

                    var container = builder.Build();

                    var scope = container.BeginLifetimeScope();

                    _autofacContainer = container;
                }

                return _autofacContainer;
            }
        }

        public static ILeaveManager _leaveManager
        {
            get
            {
                return AutofacContainer.Resolve<ILeaveManager>();
            }
        }
        public static void Main(string[] args)
        {
            GetLeaves();
        }

        private static void GetLeaves()
        {
            List<TMS_Leave> llll = _leaveManager.Get().ToList();
        }
    }
}
