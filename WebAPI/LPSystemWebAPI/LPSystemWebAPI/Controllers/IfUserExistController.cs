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
namespace LPSystemWebAPI.Controllers
{
    public class IfUserExistController : ApiController
    {
        private UserEntity userDb = new UserEntity();

        // Check is user exist : api/IfUserExist
        public HttpResponseMessage Post([FromBody] UserCred user)
        {
            try
            {
                UserTable foundUser = userDb.UserTables.SingleOrDefault(x => x.UserEmail == user.UserEmail);
                if (foundUser != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, foundUser);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, foundUser);
                }
            }
            catch (Exception)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Something went wrong");
            }
        }
    }
}