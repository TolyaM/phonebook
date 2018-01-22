using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace NewsService.DAL.Models
{
    #region Enumeration
    public enum Category
    {
        NotSet = 0,
        Important = 1,
        Daily = 2,
    }
    #endregion

    public class News
    {
        #region Properties
        public long Id { get; set; }

        #region Enumeration
        [JsonConverter(typeof(StringEnumConverter))]
        public Category? Category { get; set; }
        #endregion

        public string Heading { get; set; }
        public string Text { get; set; }
        public DateTime? Date { get; set; }
        #endregion
    }
}
