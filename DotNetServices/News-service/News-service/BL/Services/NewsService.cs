using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using NewsService.BL.DTO;
using NewsService.DAL.Models;
using NewsService.DAL.Repositories;

namespace NewsService.BL.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _newsRepository;

        public NewsService(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        public async Task CreateNews(NewsDTO newsDTO)
        {
            var news =  Mapper.Map<NewsDTO, News>(newsDTO);
            await _newsRepository.CreateNews(news);
        }

        public async Task<IEnumerable<NewsDTO>> GetAllNews()
        {
            var news = await _newsRepository.GetAllNews();
            return Mapper.Map<IEnumerable<News>, List<NewsDTO>>(news);
        }

        public async Task<IEnumerable<NewsDTO>> GetImportantNews()
        {
            var news = await _newsRepository.GetImportantNews();
            return Mapper.Map<IEnumerable<News>, List<NewsDTO>>(news);
        }

        public async Task<IEnumerable<NewsDTO>> GetDailyNews()
        {
            var news = await _newsRepository.GetDailyNews();
            return Mapper.Map<IEnumerable<News>, List<NewsDTO>>(news);
        }

        public async Task<NewsDTO> GetByIdNews(long id)
        {
            var news = await _newsRepository.GetByIdNews(id);
            return Mapper.Map<News, NewsDTO>(news);
        }

        public async Task DeleteNews(long id)
        {
            await _newsRepository.DeleteNews(id);
        }

        public async Task UpdateNews(NewsDTO newsDTO)
        {
            var news = Mapper.Map<NewsDTO, News>(newsDTO);
            await _newsRepository.UpdateNews(news);
        }
    }
}

