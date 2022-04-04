export default function appendToEachArrayValue(array, appendString) {
    const new_array = [];
    for (const el of array) {
        new_array.push(appendString + el);
    }
  
    return new_array;
}