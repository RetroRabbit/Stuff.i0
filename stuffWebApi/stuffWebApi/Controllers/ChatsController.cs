using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stuffWebApi.Models;

namespace stuffWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Chats")]
    public class ChatsController : Controller
    {
            private readonly ChatContext _context;

            public ChatsController(ChatContext context)
            {
                _context = context;
            }

            // GET: api/Chats
            [HttpGet]
            public IEnumerable<Chat> GetChats()
            {
                return _context.Chats;
            }

            // GET: api/Chats/GetBySender/2
            [HttpGet("GetChatsForUser/{id}")]
            public async Task<IActionResult> GetChatsForUser(long id)
            {
                var chats = await _context.Chats.Where(m => m.SenderId == id || m.ReceiverId == id).ToListAsync();

                if (chats == null)
                {
                    return NotFound();
                }

                return Json(chats);
            }

            // GET: api/Chats/10/20
            [HttpGet("GetChatsBySR/{senderId}/{receiverId}")]
            public async Task<IActionResult> GetChatsBySenderAndReceiver(long senderId, long receiverId)
            {
                var chats = await _context.Chats.Where(m => (m.SenderId == receiverId && m.ReceiverId == senderId)
                    || (m.SenderId == senderId && m.ReceiverId == receiverId)).ToListAsync();

                if (chats == null)
                {
                    return NotFound();
                }

                return Json(chats);
            }

            [HttpPost]
            public async Task<IActionResult> PostChat([FromBody]Chat chat)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                chat.TimeSent = DateTime.Now;

                _context.Chats.Add(chat);
                await _context.SaveChangesAsync();

                return Ok(chat);
            }
    }
}