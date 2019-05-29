let spawn = require('child_process').spawn;

// start get log process
let git = spawn('git', ['log','--format=%s']);

// process data
git.stdout.on('data', (data) => {
    let raw = data.toString();
    console.log(raw);
});

// if process error
git.stderr.on('data', (data) => {
    console.log(data.toString());
});

// when process is done
git.on('close', (code) => {
    console.log('process done with code: ' + code);
});
