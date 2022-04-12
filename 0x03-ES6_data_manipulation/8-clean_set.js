export default function cleanSet(set, startString) {
  let result;
  if (!startString) {
    return '';
  }
  result = Array.from(set).filter((word) => word.startsWith(startString));
  result = result.map((word) => word.slice(startString.length));
  return result.join('-');
}
