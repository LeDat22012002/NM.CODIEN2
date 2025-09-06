using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Criteria.Dtos;
using Server.Models.Data.ApiResponse;
using Test.Model.Data.Context;
using Test.Models.Data;

namespace Server.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class Criteria2Controller : ControllerBase
    {
        private readonly TestDbContext _context;

        public Criteria2Controller(TestDbContext context)
        {
            _context = context;
        }

        [HttpPost("createCriteria")]
        public async Task<IActionResult> CreateCrite([FromBody] CriteriaDtos request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Status = false,
                    Message = "Dữ liệu không hợp lệ ",
                    Data = null,
                });
            }

            var existingTagname = await _context.BangDanhGia.FirstOrDefaultAsync(c => c.TagName == request.TagName);

            if (existingTagname != null)
            {
                return Ok(new ApiResponse<object>
                {
                    Status = false,
                    Message = "Tagname này đã tồn tại!",
                    Data = null
                });
            }

            var criteria = new BangDanhGia
            {
                TagName = request.TagName,
                YNghia = request.YNghia,
                DiemSoText = request.DiemSoText,
            };

            _context.BangDanhGia.Add(criteria);
            await _context.SaveChangesAsync();

            return Ok(new ApiResponse<BangDanhGia>
            {
                Status = true,
                Message = "Tạo thành công",
                Data = criteria
            });
        }

        [HttpGet("getCriteria")]
        public async Task<IActionResult> GetCriteria()
        {
            var criterias = await _context.BangDanhGia.ToListAsync();
            return Ok(new ApiResponse<List<BangDanhGia>>
            {
                Status = true,
                Message = "Lấy danh sách thành công!",
                Data = criterias
            });
        }

    }
}