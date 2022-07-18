using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestAPI.Data;
using TestAPI.Models;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyTasksController : ControllerBase
    {
        private readonly todo_listContext _context;

        public MyTasksController(todo_listContext context)
        {
            _context = context;
        }

        // GET: api/MyTasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MyTask>>> GetTasks()
        {
          if (_context.Tasks == null)
          {
              return NotFound();
          }
            return await _context.Tasks.ToListAsync();
        }

        // GET: api/MyTasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MyTask>> GetMyTask(int id)
        {
          if (_context.Tasks == null)
          {
              return NotFound();
          }
            var myTask = await _context.Tasks.FindAsync(id);

            if (myTask == null)
            {
                return NotFound();
            }

            return myTask;
        }

        // PUT: api/MyTasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMyTask(int id, MyTask myTask)
        {
            if (id != myTask.TaskId)
            {
                return BadRequest();
            }

            _context.Entry(myTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MyTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MyTasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MyTask>> PostMyTask(MyTask myTask)
        {
          if (_context.Tasks == null)
          {
              return Problem("Entity set 'todo_listContext.Tasks'  is null.");
          }
            _context.Tasks.Add(myTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMyTask", new { id = myTask.TaskId }, myTask);
        }

        // DELETE: api/MyTasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMyTask(int id)
        {
            if (_context.Tasks == null)
            {
                return NotFound();
            }
            var myTask = await _context.Tasks.FindAsync(id);
            if (myTask == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(myTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MyTaskExists(int id)
        {
            return (_context.Tasks?.Any(e => e.TaskId == id)).GetValueOrDefault();
        }
    }
}
