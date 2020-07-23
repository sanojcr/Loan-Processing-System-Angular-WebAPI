using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LPSystemWebAPI.Models;

namespace LPSystemWebAPI.Controllers
{
    public class UserTablesController : ApiController
    {
        private UserEntity userDb = new UserEntity();

        // GET: api/UserTables
        [Authorize(Roles = "Admin,Customer,Client")]
        public IQueryable<UserTable> GetUserTables()
        {
            UserCrypt crypt = new UserCrypt();
            foreach (UserTable app in userDb.UserTables)
            {
                app.UserPass = crypt.DecryptPass(app.UserPass);
            }
            return userDb.UserTables;
        }

        // GET: api/UserTables/5
        [Authorize(Roles = "Admin,Customer,Client")]
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult GetUserTable(int id)
        {
            UserTable userTable = userDb.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            return Ok(userTable);
        }

        // PUT: api/UserTables/5
        [Authorize(Roles = "Admin,Customer,Client")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserTable(int id, UserTable userTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userTable.UserId)
            {
                return BadRequest();
            }

            userDb.Entry(userTable).State = EntityState.Modified;

            try
            {
                UserCrypt crypt = new UserCrypt();
                userTable.UserPass = crypt.EncryptPass(userTable.UserPass);
                userDb.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserTables
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult PostUserTable(UserTable userTable)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            UserCrypt crypt = new UserCrypt();
            userTable.UserPass = crypt.EncryptPass(userTable.UserPass);
            userDb.UserTables.Add(userTable);
            userDb.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = userTable.UserId }, userTable);
        }

        // DELETE: api/UserTables/5
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult DeleteUserTable(int id)
        {
            UserTable userTable = userDb.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            userDb.UserTables.Remove(userTable);
            userDb.SaveChanges();

            return Ok(userTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                userDb.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserTableExists(int id)
        {
            return userDb.UserTables.Count(e => e.UserId == id) > 0;
        }
    }

}