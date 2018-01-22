using System.Collections.Generic;
using System.Threading.Tasks;
using NewsService.DAL.Models;


namespace NewsService.DAL.Repositories
{
    public interface INewsRepository
    {
        Task CreateNews(News news);
        Task<IEnumerable<News>> GetAllNews(); 
        Task<IEnumerable<News>> GetImportantNews();
        Task<IEnumerable<News>> GetDailyNews();
        Task<News> GetByIdNews(long id);
        Task DeleteNews(long id);
        Task UpdateNews(News news);
    }
}
