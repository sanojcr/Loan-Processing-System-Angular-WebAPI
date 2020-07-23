using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Web.Http.Description;
using LPSystemWebAPI.Models;
using System.Security.Claims;
using System.Web.Mvc;

namespace LPSystemWebAPI.Controllers
{
    public class LoginAuthController : ApiController
    {
        private UserEntity userDb = new UserEntity();
        // Check the user is valid : api/LoginAuth
        public HttpResponseMessage Post([FromBody] UserCred user)
        {
            try
            {
                UserCrypt crypt = new UserCrypt();
                string encryptPass = crypt.EncryptPass(user.UserPass);
                UserTable foundUser = userDb.UserTables.SingleOrDefault(x => x.UserEmail == user.UserEmail && x.UserPass.Equals(encryptPass));
                if (foundUser != null)
                {
                    foundUser.UserPass = crypt.DecryptPass(foundUser.UserPass);
                    return Request.CreateResponse(HttpStatusCode.OK, foundUser);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, foundUser);
                }
            }
            catch (ArgumentException e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, e.Message);
                /*return Request.CreateResponse(HttpStatusCode.BadRequest, "Something went wrong");*/
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, e.Message);
            }
            finally
            {

            }
        }

    }
}

/*
int[] temp = new[] { 8, 2, 12, 3, 1 }
int abc = 18;
if(temp[2]==12)
    {
    abc=10;
    }
    else{
    temp[2]=10;
    }
*/



