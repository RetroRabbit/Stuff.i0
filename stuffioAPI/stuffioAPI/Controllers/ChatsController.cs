using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stuffioAPI.Models;

namespace stuffioAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Chats")]
    [EnableCors("MyPolicy")]
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
        public async Task<IActionResult> GetChatsForUser([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var chats = await _context.Chats.Where(m => m.SenderId == id || m.ReceiverId == id).ToListAsync();

            if (chats == null)
            {
                return NotFound();
            }

            return Ok(chats);
        }

        // GET: api/Chats/10/20
        [HttpGet("GetChatsBySR/{senderId}/{receiverId}")]
        public async Task<IActionResult> GetChatsBySenderAndReceiver([FromRoute] long senderId, long receiverId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var chats = await _context.Chats.Where(m => m.SenderId == senderId || m.ReceiverId == senderId && m.SenderId == receiverId || m.ReceiverId == receiverId).ToListAsync();

            if (chats == null)
            {
                return NotFound();
            }

            return Ok(chats);
        }

        // POST: api/Chats/20/10/'hi'
        [HttpPost]
        public async Task<IActionResult> PostChat([FromBody] long receiverId, long senderId, string msg)
        {
            Chat chat = new Chat { ReceiverId = receiverId, SenderId = senderId, Text = msg, TimeSent = DateTime.Now };
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Chats.Add(chat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChat", new { id = chat.Id }, chat);
        }
    }
}