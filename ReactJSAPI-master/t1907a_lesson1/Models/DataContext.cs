using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using t1907a_lesson1.Models;

namespace t1907a_lesson1.Models
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Data Source=ADMIN;Initial Catalog=T1907A_NetCore;User ID=sa;Password=123456");
        }
       public DbSet<Category> Categories { get; set; }
    }
}
