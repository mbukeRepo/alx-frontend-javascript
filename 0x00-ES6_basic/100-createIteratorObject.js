export default function createIteratorObject(report) {
  const newArray = [];
  for (const key of Object.keys(report.allEmployees)) {
    newArray.push(...report.allEmployees[key]);
  }
  return newArray;
}
