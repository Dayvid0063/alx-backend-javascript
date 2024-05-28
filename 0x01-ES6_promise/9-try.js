export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const r = mathFunction();
    queue.push(r);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
