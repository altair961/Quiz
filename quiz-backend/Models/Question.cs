using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Models
{
    public class Question
    {
        public int ID { get; set; }
        public string Text { get; set; }
    }
}