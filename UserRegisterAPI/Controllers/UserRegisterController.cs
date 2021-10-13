using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserRegisterAPI.Models;

namespace UserRegisterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : ControllerBase
    {
        private readonly UserContext _context;

        public UserRegisterController(UserContext context)
        {
            _context = context;
        }

        // GET: api/UserRegister
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDetails>>> GetUserDetailsSet()
        {
            return await _context.UserDetailsSet.ToListAsync();
        }
        

        // GET: api/UserRegister/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDetails>> GetUserDetails(long id)
        {
            var userDetails = await _context.UserDetailsSet.FindAsync(id);

            if (userDetails == null)
            {
                return NotFound();
            }

            return userDetails;
        }
        

        // POST: api/UserRegister        
        [HttpPost]
        public async Task<ActionResult<UserDetails>> PostUserDetails(UserDetails userDetails)
        {
            _context.UserDetailsSet.Add(userDetails);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetUserDetails", new { id = userDetails.ID }, userDetails);
            return CreatedAtAction(nameof(GetUserDetails), new { id = userDetails.ID }, userDetails);
        }

        
    }
}
