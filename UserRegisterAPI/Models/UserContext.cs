using Microsoft.EntityFrameworkCore;

namespace UserRegisterAPI.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        public DbSet<UserDetails> UserDetailsSet { get; set; }

    }
    
}