﻿namespace BookStore.DataAccess.Entities
{
    public class BookEntity
    {

        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public decimal Price { get; set; }

    }
}
