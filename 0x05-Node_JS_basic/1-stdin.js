process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', () => {
  const info = process.stdin.read();

  if (info) {
    process.stdout.write(`Your name is: ${info}`);
  }
});
process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
