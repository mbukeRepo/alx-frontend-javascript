export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof(name) !== 'string')
      throw new TypeError('name must be a string');
    this._name = name;
  }
  get code() {
    return this._code;
  }
  set code(code) {
    if (typeof(code) !== 'string')
      throw new TypeError('code must be a string');
    this._code = code;
  }
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
