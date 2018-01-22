using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;

namespace NewsService.BL.DTO
{
    #region Enumeration
    public enum Category
    {
        NotSet = 0,
        Important = 1,
        Daily = 2,
    }
    #endregion

    public class NewsDTO
    {
        #region Properties
        public long Id { get; set; }

        #region Enumeration
        [Required(ErrorMessage = "Please select News category")]
        [JsonConverter(typeof(StringEnumConverter))]
        public Category? Category { get; set; }
        #endregion

        [Required(ErrorMessage = "Please enter News heading")]
        [StringLength(200, ErrorMessage = "The heading of news can not excced 200 characters")]
        public string Heading { get; set; }


        [Required(ErrorMessage = "Please enter News text")]
        [StringLength(2000, ErrorMessage = "The text of news can not excced 2000 characters")]
        public string Text { get; set; }

        public DateTime? Date { get; set; }
        #endregion
    }
}
