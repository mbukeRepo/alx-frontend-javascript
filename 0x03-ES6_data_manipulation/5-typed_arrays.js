export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const view = new Int8Array(newBuffer);
  view[position] = value;
  return new DataView(newBuffer, view);
}
