﻿using Autofac;
using BL;
using BL.Interface;
using DAL;
using DAL.IRepositories;
using Repository.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIService
{
    public static class ServiceRegistry
    {
        public static ContainerBuilder Register(ContainerBuilder builder)
        {

            // UnitOfWork
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().SingleInstance();  
            #region Repository
            builder.RegisterType<SubjectRepository>().As<ISubjectRepository>().AsSelf();
            builder.RegisterType<UserInfoRepository>().As<IUserInfoRepository>().AsSelf();
            #endregion

            #region Managers
            builder.RegisterType<SubjectManager>().As<ISubjectManager>().AsSelf();
            builder.RegisterType<UserInfoManager>().As<IUserInfoManager>().AsSelf();
            #endregion


            return builder;
        }
    }
}
