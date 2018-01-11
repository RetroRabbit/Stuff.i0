using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stuffioAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string UserSurname { get; set; }

        public string UserImg { get; set; }

        public string UserEmail { get; set; }
    }
}
