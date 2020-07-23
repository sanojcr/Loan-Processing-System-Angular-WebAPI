using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Security.Claims;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LPSystemWebAPI.Models;

namespace LPSystemWebAPI.Controllers
{
    public class LoanTablesController : ApiController
    {
        private LoanEntity loanDb = new LoanEntity();

        // GET: api/LoanTables
        public IQueryable<LoanTable> GetLoanTables()
        {
            return loanDb.LoanTables;
        }

        // GET: api/LoanTables/5
        [ResponseType(typeof(LoanTable))]
        public IHttpActionResult GetLoanTable(int id)
        {
            LoanTable loanTable = loanDb.LoanTables.Find(id);
            if (loanTable == null)
            {
                return NotFound();
            }

            return Ok(loanTable);
        }

        // PUT: api/LoanTables/5
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLoanTable(int id, LoanTable loanTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != loanTable.LoanId)
            {
                return BadRequest();
            }

            loanDb.Entry(loanTable).State = EntityState.Modified;

            try
            {
                loanDb.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoanTableExists(id))
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

        // POST: api/LoanTables
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(LoanTable))]
        public IHttpActionResult PostLoanTable(LoanTable loanTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            loanDb.LoanTables.Add(loanTable);
            loanDb.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = loanTable.LoanId }, loanTable);
        }

        // DELETE: api/LoanTables/5
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(LoanTable))]
        public IHttpActionResult DeleteLoanTable(int id)
        {
            LoanTable loanTable = loanDb.LoanTables.Find(id);
            if (loanTable == null)
            {
                return NotFound();
            }

            loanDb.LoanTables.Remove(loanTable);
            loanDb.SaveChanges();

            return Ok(loanTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                loanDb.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LoanTableExists(int id)
        {
            return loanDb.LoanTables.Count(e => e.LoanId == id) > 0;
        }
    }
}