const inquire= require('inquirer')
const fs = require('fs')




inquire
    .prompt([
        {
            type:'input',
            name:'title',
            message:'What is the name of the project',
        },
        {
            type:'input',
            name:'description',
            message:'What is the project about?',
        },
        {
            type:'checkbox',
            name:'License',
            message:'What license would you be using',
            choices:['','','',]
        },
        {
            type:'input',
            name:'',
            message:'',
        },
        {
            type:'input',
            name:'',
            message:'',
        },
    ])
    .then((answers)=>{
        const READMEcontent = generateREADME(answers)
        fs.writeFile('README.md',READMEcontent,(err) =>
        err ? console.log(err) : console.log('README created')
        )
    })

