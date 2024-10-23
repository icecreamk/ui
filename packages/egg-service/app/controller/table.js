const { Controller } = require('egg');

class TableController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.set('Access-Control-Allow-Origin', '*');

    const num = 5;
    const list = Array.from({ length: num }, (_, i) => {
      return {
        province: `省份${i + 1}`,
        time: `时间${i + 1}`,
      };
    });

    ctx.body = {
      records: list,
      total: 3,
    };
  }
}

module.exports = TableController;
