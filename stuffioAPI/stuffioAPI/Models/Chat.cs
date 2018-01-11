using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace stuffioAPI.Models
{
    public class Chat
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public long SenderId { get; set; }
        [Required]
        public long ReceiverId { get; set; }
        [Required]
        public DateTime TimeSent { get; set; }
        [Required]
        public string Text { get; set; }
    }
}
