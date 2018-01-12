using stuffioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stuffioAPI.Data
{
    public class ChatInitializer
    {
        private ChatContext _context;

        public ChatInitializer(ChatContext context)
        {
            _context = context;
        }



        public async Task Seed()
        {

            if (!_context.Chats.Any())
            {
                _context.AddRange(_chats);
                await _context.SaveChangesAsync();
            }
        }

        List<Chat> _chats = new List<Chat>
        {
            new Chat()
            {
                SenderId = 2,
                ReceiverId = 20,
                Text = "This is from her to me",
                TimeSent = DateTime.Parse("2018-01-11T08:31:10")
            },
           new Chat()
            {
                SenderId = 10,
                ReceiverId = 20,
                Text = "This is from him to me",
                TimeSent = DateTime.Parse("2018-01-11T08:34:10")
            },
           new Chat()
            {
                SenderId = 2,
                ReceiverId = 20,
                Text = "This is from him to me again",
                TimeSent = DateTime.Parse("2018-01-11T08:38:10")
            }
        };
    }
}
