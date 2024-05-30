class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Override toString to return the airport code
  toString() {
    return this._code;
  }
}

export default Airport;
