const DbError = require("./dbError");

class DbData {
  constructor(result) {
    if (!result) {
      result = {};
    }
    this.ok = result.ok || false;
    this.respuesta = result.respuesta || {};
    this.errors = result.errors || [];
  }

  llenarErrores(errors) {
    var er = [];
    errors.forEach(function (element) {
      // console.log(element);
      // this.errores.push(new ItemError());
      er.push(new DbError(element));
    });
    this.ok = true;
    this.errors = er;
    //console.log(this.errores);
  }
}

module.exports = DbData;
