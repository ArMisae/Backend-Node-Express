class DbError {
  constructor(result) {
    if (!result) {
      result = {};
    }
    this.mensaje = result.mensaje || "";
  }
}

module.exports = DbError;
