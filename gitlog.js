let spawn = require('child_process').spawn;

let git = spawn('git',['log']);

console.log('this far at least');

git.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


git.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

/*
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
*/