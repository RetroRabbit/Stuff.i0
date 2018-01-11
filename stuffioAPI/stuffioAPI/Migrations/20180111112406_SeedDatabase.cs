using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace stuffioAPI.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Chats (SenderId, ReceiverId, Text, TimeSent) VALUES (2,20,'This is from her to me', '2018-01-11T08:31:10')");
            migrationBuilder.Sql("INSERT INTO Chats (SenderId, ReceiverId, Text, TimeSent) VALUES (10,20,'This is from him to me', '2018-01-11T08:34:10')");
            migrationBuilder.Sql("INSERT INTO Chats (SenderId, ReceiverId, Text, TimeSent) VALUES (10,20,'This is from him to me again', '2018-01-11T08:38:10')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}
