using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LPSystemWebAPI.Models
{
    public class Apply
    {
        public int AppId { get; set; }
        public int UserId { get; set; }
        public int LoanId { get; set; }
        public string UserName { get; set; }
        public string UserGender { get; set; }
        public string UserEmail { get; set; }
        public string UserMob { get; set; }
        public string UserAdhaar { get; set; }
        public string LoanType { get; set; }
        public Nullable<decimal> LoanAmt { get; set; }
        public string AppStatus { get; set; }
    }
}