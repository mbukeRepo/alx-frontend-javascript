export default function getStudentsByLocation(students, city) {
  return students.filter(({location}) => city === location);
}
