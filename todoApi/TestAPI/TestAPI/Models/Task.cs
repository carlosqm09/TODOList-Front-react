﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TestAPI.Models
{
    public partial class MyTask
    {
        [Key]
        public int TaskId { get; set; }
        public string TaskTitle { get; set; }
        public string TaskDescription { get; set; }
        public string TaskDate { get; set; }
        public int TaskStatus { get; set; }
        public int TaskPriority { get; set; }
    }
}