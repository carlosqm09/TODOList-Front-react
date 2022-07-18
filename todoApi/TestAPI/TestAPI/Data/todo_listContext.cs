#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using TestAPI.Models;

namespace TestAPI.Data
{
    public partial class todo_listContext : DbContext
    {
        public todo_listContext()
        {
        }

        public todo_listContext(DbContextOptions<todo_listContext> options)
            : base(options)
        {
        }

        public virtual DbSet<MyTask> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MyTask>(entity =>
            {
                

                entity.Property(e => e.TaskId).HasColumnName("TaskID");

                entity.Property(e => e.TaskDate)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TaskDescription)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TaskTitle)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}