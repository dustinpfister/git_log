let spawn = require('child_process').spawn,
git = spawn('git', ['log', '--format=%s']),
buf = Buffer.alloc(0);
git.stdout.on('data', (data) => {
    buf = Buffer.concat([buf, data])
});
git.stderr.on('data', (data) => {
    console.log(data.toString());
});

// when process is done
git.on('close', (code) => {
    let subjects = buf.toString().split('\n');
    subjects.pop();

    // filter by post_update:id-[id number]:v-[version number]
    subjects = subjects.filter((sub) => {
            return sub.match(/^post_update:/);
        });

    // log all subject names
    subjects.forEach((sub) => {
        console.log(sub);
    });

});
