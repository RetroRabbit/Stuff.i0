using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using stuffioAPI.Models;

namespace stuffioAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    [EnableCors("MyPolicy")]
    public class UsersController : Controller
    {
        public List<User> UserList = new List<User>
        {
            new User { Id = 20,
            UserName = "Joe",
            UserSurname = "Sirwali",
            UserEmail = "joe@gmail.com",
            UserImg =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" },
            new User { Id = 10,
            UserName = "Takie",
            UserSurname = "Ndou",
            UserEmail = "mulavhe@gmail.com",
            UserImg =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" },
            new User { Id = 20,
            UserName = "Rendani",
            UserSurname = "Sirwali",
            UserEmail = "mulavhe@gmail.com",
            UserImg =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" }
        };

        [HttpGet("GetAllUsers")]
        public IEnumerable<User> GetAll()
        {
            return UserList;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(long id)
        {
            //var item = _context.Chats.Find(id);
            var item = UserList.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}