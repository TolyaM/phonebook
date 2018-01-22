using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewsService.BL.DTO;
using NewsService.BL.Services;


namespace NewsService.PL.Controllers
{
    [Route("api/news")]
    public class NewsController : Controller
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService; 
        }

        //GET: api/news
        [HttpGet]
        public Task<IEnumerable<NewsDTO>> GetAllNewws() => _newsService.GetAllNews();

        //GET: api/news/important
        [HttpGet]
        [Route("important")]
        public async Task<IEnumerable<NewsDTO>> GetImportantNews()
        {
            return await _newsService.GetImportantNews();
        }

        //GET: api/news/daily
        [HttpGet]
        [Route("daily")]
        public async Task<IEnumerable<NewsDTO>> GetDailyNews()
        {
            return await _newsService.GetDailyNews();
        }

        //GET api/news/5
        [HttpGet("{id:int}")]
        public Task<NewsDTO> Get(long id) => _newsService.GetByIdNews(id);

        //POST api/news
        [HttpPost]
        public async Task CreateNews([FromBody]NewsDTO news) 
        {
            if (ModelState.IsValid)
                await _newsService.CreateNews(news);
        }

        //PUT api/news/5
        [HttpPut("{id:int}")]
        public async Task UpdateNews(long id, [FromBody]NewsDTO news)
        {
            news.Id = id;
            if (ModelState.IsValid) 
                await _newsService.UpdateNews(news);
        }

        //DELETE api/news/5
        [HttpDelete("{id:int}")]
        public async Task DeleteNews(long id) => await _newsService.DeleteNews(id);
    }
}
