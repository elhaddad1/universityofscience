﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Repository.Model
{
    using Repository.Entity;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class USSCEntities : DbContext
    {
        public USSCEntities()
            : base("name=USSCEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Exam> Exams { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<SystemAction> SystemActions { get; set; }
        public virtual DbSet<SystemRoleAction> SystemRoleActions { get; set; }
        public virtual DbSet<SystemUser> SystemUsers { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
    }
}
