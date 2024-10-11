const { Controller } = require("egg");

class TableController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.body = {
      records: [
        { province: "省份1", time: "时间" },
        { province: "省份2", time: "时间" },
        { province: "省份3", time: "时间" },
      ],
      total: 3
    };
  }
}

module.exports = TableController;
