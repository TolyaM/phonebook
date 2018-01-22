using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using NewsService.DAL.Models;

namespace NewsService.DAL.Repositories
{
    public class NewsRepository : INewsRepository
    {
        public readonly string _connectionString;

        public NewsRepository(IConfiguration configuration)
        {
            _connectionString = configuration["connectionString"];
        }

        private IDbConnection Connection => new MySqlConnection(_connectionString);

        public async Task CreateNews(News news)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "INSERT INTO news (Category, Heading, Text, Date)"
                                + " VALUES(@Category, @Heading, @Text, @Date)";
                dbConnection.Open();
                await dbConnection.ExecuteAsync(sQuery, news);
            }
        }

        public async Task<IEnumerable<News>> GetAllNews()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return await dbConnection.QueryAsync<News>("SELECT * FROM news");
            }
        }

        public async Task<News> GetByIdNews(long id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "SELECT * FROM news"
                                + " WHERE Id = @Id";
                dbConnection.Open();
                return await dbConnection.QueryFirstOrDefaultAsync<News>(sQuery, new { Id = id });

            }
        }

        public async Task DeleteNews(long id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "DELETE FROM news"
                                + " WHERE Id = @Id";
                dbConnection.Open();
                await dbConnection.ExecuteAsync(sQuery, new { Id = id });
            }
        }

        public async Task UpdateNews(News news)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "UPDATE news SET Category = @Category,"
                                + " Heading = @Heading, Text = @Text,"
                                + "  Date = @Date, WHERE Id = @Id";
                dbConnection.Open();
                await dbConnection.ExecuteAsync(sQuery, news); 
            }
        }

        public async Task<IEnumerable<News>> GetImportantNews()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return await dbConnection.QueryAsync<News>("SELECT * FROM news WHERE news.Category = 'Important'");
            }
        }

        public async Task<IEnumerable<News>> GetDailyNews()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return await dbConnection.QueryAsync<News>("SELECT * FROM news WHERE news.Category = 'Daily'");
            }
        }
    }
}
