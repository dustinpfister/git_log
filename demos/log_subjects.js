let spawn = require('child_process').spawn;

// start get log process
let git = spawn('git', ['log', '--format=%s']);

// process data
buf = Buffer.alloc(0);
git.stdout.on('data', (data) => {
    //let raw = data.toString();
    //console.log(data);
    buf = Buffer.concat([buf, data])
});

// if process error
git.stderr.on('data', (data) => {
    console.log(data.toString());
});

// when process is done
git.on('close', (code) => {
    //console.log('process done with code: ' + code);
    let subjects = buf.toString().split('\n');
    subjects.pop(); // pop the last empty string element

    // log all subject names
    subjects.forEach((sub) => {
        console.log(sub);
    });

});
