export default function guardrail(func) {
  const queue = [];
  try {
    const ret = func();
    queue.push(ret);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
