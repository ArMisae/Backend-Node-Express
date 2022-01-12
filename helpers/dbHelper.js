const sql = require("mssql");
const config = require("../config/config");
const DbData = require("./dbData");

class DbHelper {
  constructor() {
    this.dbData = new DbData();
    this.input = [];
  }

  async sp(procedimiento, input) {
    try {
      if (!input) {
        input = this.input;
      }

      var promesa = new Promise(async function(resolve, reject) {

        const pool = await sql.connect(config);
        var sp = pool.request();

        input.forEach(element => {
            sp.input(element.name, element.type, element.value);
        });
        
        const respuesta = await sp.execute(procedimiento);
        var d = await recorrer(respuesta || []);
        resolve(d);

        

      });

      return promesa;

    } catch (error) {
        console.log(error)
    }
  };
};

async function recorrer(data) {

    var d = new DbData();
    if (data.returnValue === 0) {
        var nombre = "";
        // (data.recordsets).forEach(function(element, $index) {
        //     nombre = 'Consulta' + $index;
        //     d.respuesta
        //     d.respuesta[nombre] = element;
        // });
        d.respuesta = data.recordsets;
    } else {
        d.llenarErrores(data.recordsets[0]);
    }
    return d;
};

module.exports = DbHelper;


