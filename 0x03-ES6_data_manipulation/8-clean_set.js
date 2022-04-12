export default function cleanSet(set, startString) {
  let result;
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  result = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  result = result.map((word) => word.slice(startString.length));
  return result.join('-');
}
