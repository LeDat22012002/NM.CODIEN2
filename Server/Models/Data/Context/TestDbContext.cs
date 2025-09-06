using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Test.Models.Data;

namespace Test.Model.Data.Context;

public partial class TestDbContext : DbContext
{
    public TestDbContext()
    {
    }

    public TestDbContext(DbContextOptions<TestDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BangDanhGia> BangDanhGia { get; set; }

//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
//         => optionsBuilder.UseSqlServer("Server=NMCD2-HPDQ34864\\DAT2025;Database=TEST;User ID=sa;Password=Ronaldat@2026;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BangDanhGia>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PK__BangDanh__3213E83FF1D7F784");

            entity.Property(e => e.DiemSoText).HasMaxLength(100);
            entity.Property(e => e.TagName).HasMaxLength(255);
            entity.Property(e => e.YNghia).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
