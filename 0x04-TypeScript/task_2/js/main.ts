interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
  
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }

}
  
class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: any) {
  return employee instanceof Director;
}
  
function executeWork(employee: Teacher | Director): void {
  if (employee instanceof Director) employee.workDirectorTasks();
  else if (employee instanceof Teacher) employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(teachClass: Subjects): string {
  if (teachClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

//testing 

//console.log(teachClass('Math'));