export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof(name) !== 'string')
      throw new TypeError('name must be a string');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof(length) !== 'number')
      throw new TypeError('length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof(students) !== 'object')
      throw new TypeError('students must be an array of strings');
    this._students = students;
  }
}
