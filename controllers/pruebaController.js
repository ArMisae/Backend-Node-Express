const DbHelper = require("../helpers/dbHelper");
const sql = require('mssql');

class Prueba {
  constructor() {}

  async GetPrueba(parametros) {
    try {
      var dbHelper = new DbHelper();
      if(parametros){
        dbHelper.input = [
          { name: 'id', type: sql.Int, value: parametros.id }
        ]
      };

      return await dbHelper.sp('Categoria.spCategoriaMostrar');

    } catch (error) {
        return error;
    }
  }

  async PostCategoria(parametros){
    try {
      var dbHelper = new DbHelper();
      if(parametros){
        dbHelper.input = [
          { name: 'nombre', type: sql.VarChar, value: parametros.nombre }
        ]
      };

      return await dbHelper.sp('Categoria.spCategoriaInsertar');

    } catch (error) {
        return error;
    }
  }

}


module.exports = Prueba;
