using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LPSystemWebAPI.Models
{
    public class UserCrypt
    {
        public string DecryptPass(string encryptPass)
        {
            byte[] b;
            string decryptPass;
            try
            {
                b = Convert.FromBase64String(encryptPass);
                decryptPass = System.Text.Encoding.ASCII.GetString(b);
            }
            catch (FormatException)
            {
                decryptPass = "";
            }
            return decryptPass;
        }

        public string EncryptPass(string plainPass)
        {
            byte[] b = System.Text.Encoding.ASCII.GetBytes(plainPass);
            string encryptPass = Convert.ToBase64String(b);
            return encryptPass;
        }

    }
}