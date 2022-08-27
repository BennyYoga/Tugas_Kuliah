const yargs = require('yargs')
let data = require("./data.json")

yargs.command({
    command: 'delete',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        data = data.filter((x) => {
            return x.title != argv.title && x.author != argv.body
        })
        console.log(data);
    }
})
console.log(yargs.argv);