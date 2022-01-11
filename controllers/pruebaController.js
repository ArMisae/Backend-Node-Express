const DbHelper = require("../helpers/dbHelper");

class Prueba {
  constructor() {}

  async GetPrueba() {
    try {
      var dbHelper = new DbHelper();

      return await dbHelper.sp('dbo.prueba');

    } catch (error) {
        return error;
    }
  }
}


module.exports = Prueba;
