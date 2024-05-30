class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // get/set code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // get/set name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
