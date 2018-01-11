using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stuffioAPI.Models
{
    public class ChatContext : DbContext
    {
        public ChatContext(DbContextOptions<ChatContext> options)
            : base(options)
        {
        }

        public DbSet<Chat> Chats { get; set; }
    }
}
