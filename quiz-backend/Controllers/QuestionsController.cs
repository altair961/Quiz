using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller 
    {
        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
        }
    }
}