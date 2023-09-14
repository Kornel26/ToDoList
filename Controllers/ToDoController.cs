using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : Controller
    {
        private readonly AppDbContext _context;

        public ToDoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var toDoItems = await _context.ToDoItems.ToListAsync();
            return Ok(toDoItems);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var toDoItem = await _context.ToDoItems.FirstOrDefaultAsync(todo => todo.Id == id);
            if (toDoItem == null) return NotFound($"The item with ID {id} does not exist.");

            return Ok(toDoItem);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ToDoItem newToDoItem)
        {
            var toDoItem = await _context.ToDoItems.FirstOrDefaultAsync(x => x.Id == newToDoItem.Id);
            if(toDoItem != null) return BadRequest($"Item already exists with ID: {newToDoItem.Id}");

            toDoItem = new ToDoItem
            {
                Id = Guid.NewGuid().ToString(),
                Title = newToDoItem.Title,
                IsCompleted = newToDoItem.IsCompleted
            };

            await _context.ToDoItems.AddAsync(toDoItem);
            int result = await _context.SaveChangesAsync();
            if(result > 0) return Ok(toDoItem);

            return BadRequest("Unable to create the ToDoItem.");            
        }

        [HttpPut]
        public async Task<IActionResult> Put(ToDoItem toDoItem)
        {
            var existingToDoItem = await _context.ToDoItems.FirstOrDefaultAsync(x => x.Id == toDoItem.Id);
            if (existingToDoItem == null) return NotFound($"The item with ID {toDoItem.Id} does not exist.");

            existingToDoItem.Title = toDoItem.Title;
            existingToDoItem.IsCompleted = toDoItem.IsCompleted;

            int result = await _context.SaveChangesAsync();
            if(result > 0) return Ok(existingToDoItem);

            return BadRequest("Unable to update the ToDoItem.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var toDoItem = await _context.ToDoItems.FirstOrDefaultAsync(x => x.Id == id);
            if(toDoItem == null) return NotFound($"The item with ID {id} does not exist.");

            _context.Remove(toDoItem);
            int result = await _context.SaveChangesAsync();
            if (result > 0) return Ok();

            return BadRequest("Unable to delete the ToDoItem.");
        }
    }
}
