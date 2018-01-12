using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using stuffWebApi.ViewModels;

namespace stuffWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        public List<UserViewModel> UserList = new List<UserViewModel>
        {
            new UserViewModel { Id = 20,
            Name = "Joe",
            Surname = "Sirwali",
            Email = "joe@gmail.com",
            Password= "password",
            Image =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" },
            new UserViewModel { Id = 10,
            Name = "Takie",
            Surname = "Ndou",
            Email = "mulavhe@gmail.com",
            Password= "password",
            Image =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" },
            new UserViewModel { Id = 22,
            Name = "Rendani",
            Surname = "Sirwali",
            Email = "example@gmail.com",
            Password= "password",
            Image =
                "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1396485177%2Ftrevor_cartoon_profile.jpg&f=1" }
        };

        [HttpGet("GetAllUsers")]
        public IEnumerable<UserViewModel> GetAll()
        {
            return UserList;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(long id)
        {
            var item = UserList.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new JsonResult(item);
        }
    }
}