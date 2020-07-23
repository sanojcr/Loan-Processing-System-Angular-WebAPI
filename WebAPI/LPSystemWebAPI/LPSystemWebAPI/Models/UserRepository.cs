using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LPSystemWebAPI.Models;

namespace LPSystemWebAPI.Models
{
    public class UserRepository : IDisposable
    {
        // userDb is the context object
        UserEntity userDb = new UserEntity();

        // Method for check and validate the user credentials
        public UserTable ValidateUser(string username, string password)
        {
            UserCrypt crypt = new UserCrypt();
            string encryptPass = crypt.EncryptPass(password);
            UserTable user= userDb.UserTables.FirstOrDefault( u =>
            u.UserEmail == username && u.UserPass.Equals(encryptPass));
            return user;
        }
        public void Dispose()
        {
            userDb.Dispose();
        }
    }
}