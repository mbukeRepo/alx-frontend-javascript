interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
};

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

interface IStudentClass {
  workOnHomework():string,
  displayName():string
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string) : IStudentClass,
}

class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string){
    this.firstName;
    this.lastName;
  }
  workOnHomework():string {
    return 'Currently working';
  }
  displayName():string {
    return this.firstName;
  }
}