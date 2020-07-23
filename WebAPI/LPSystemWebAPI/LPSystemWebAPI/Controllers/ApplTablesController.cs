using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;
using LPSystemWebAPI.Models;
using Microsoft.Ajax.Utilities;

namespace LPSystemWebAPI.Controllers
{

    public class ApplTablesController : ApiController
    {
        private LoanEntity loanDb = new LoanEntity();
        private ApplicationsEntity applDb = new ApplicationsEntity();
        private UserEntity userDb = new UserEntity();

        // GET: api/ApplTables
        [Authorize(Roles = "Admin,Client,Customer")]
        public IQueryable<Apply> GetApplTables()
        {
            IList<Apply> appList = new List<Apply>();
            foreach (ApplTable app in applDb.ApplTables)
            {
                appList.Add(new Apply
                {
                    AppId = app.AppId,
                    UserId = app.UserId,
                    LoanId = app.LoanId,
                    AppStatus = app.AppStatus,
                    LoanAmt = app.LoanAmt,
                    UserMob = app.UserMob,
                    UserAdhaar = app.UserAdhaar,
                    LoanType = loanDb.LoanTables.Where(
                       l => l.LoanId == app.LoanId).Select(
                       l => l.LoanType).FirstOrDefault().ToString(),
                    UserEmail = userDb.UserTables.Where(
                       u => u.UserId == app.UserId).Select(
                       u => u.UserEmail).FirstOrDefault().ToString(),
                    UserGender = userDb.UserTables.Where(
                       u => u.UserId == app.UserId).Select(
                       u => u.UserGender).FirstOrDefault().ToString(),
                    UserName = userDb.UserTables.Where(
                       u => u.UserId == app.UserId).Select(
                       u => u.UserName).FirstOrDefault().ToString(),
                });
            }
            return appList.AsQueryable();

        }

        // GET: api/ApplTables/5
        [Authorize(Roles = "Admin,Client,Customer")]
        [ResponseType(typeof(ApplTable))]
        public IHttpActionResult GetApplTable(int id)
        {
            ApplTable applTable = applDb.ApplTables.Find(id);
            if (applTable == null)
            {
                return NotFound();
            }

            return Ok(applTable);
        }

        // PUT: api/ApplTables/5
        [Authorize(Roles = "Client")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutApplTable(int id, ApplTable applTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != applTable.AppId)
            {
                return BadRequest();
            }

            applDb.Entry(applTable).State = EntityState.Modified;

            try
            {
                applDb.SaveChanges();
                
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplTableExists(id))
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

        // POST: api/ApplTables
        [ResponseType(typeof(ApplTable))]
        public IHttpActionResult PostApplTable(ApplTable applTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            applDb.ApplTables.Add(applTable);
            applDb.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = applTable.AppId }, applTable);
        }
        
        // DELETE: api/ApplTables/5
        [ResponseType(typeof(ApplTable))]
        public IHttpActionResult DeleteApplTable(int id)
        {
            ApplTable applTable = applDb.ApplTables.Find(id);
            if (applTable == null)
            {
                return NotFound();
            }

            applDb.ApplTables.Remove(applTable);
            applDb.SaveChanges();

            return Ok(applTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                applDb.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplTableExists(int id)
        {
            return applDb.ApplTables.Count(e => e.AppId == id) > 0;
        }
    }

}