using System.Collections.Generic;
using System.Threading.Tasks;
using NewsService.BL.DTO;

namespace NewsService.BL.Services
{
    public interface INewsService
    {
        Task CreateNews(NewsDTO news);
        Task<IEnumerable<NewsDTO>> GetAllNews();
        Task<IEnumerable<NewsDTO>> GetImportantNews();
        Task<IEnumerable<NewsDTO>> GetDailyNews();
        Task<NewsDTO> GetByIdNews(long id);
        Task DeleteNews(long id);
        Task UpdateNews(NewsDTO news);
    }
}
