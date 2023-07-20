const inquire= require('inquirer')
const fs = require('fs')

const generateREADME = ({Title,Description,License,GitHub,Email}) =>
`#${Title}

##Instructions
${Description}

##License
${License}

##Github user name
${GitHub}

##Email
${Email}
`;


inquire
    .prompt([
        {
            type:'input',
            name:'Title',
            message:'What is the name of the project',
        },
        {
            type:'input',
            name:'Description',
            message:'What is the project about?',
        },
        {
            type:'list',
            name:'License',
            message:'What license would you be using',
            choices:['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0']
        },
        {
            type:'input',
            name:'GitHub',
            message:'Enter your GitHub Username',
        },
        {
            type:'input',
            name:'email',
            message:'Enter your Email',
        },
    ])
    .then((answers)=>{
        const READMEcontent = generateREADME(answers)
        fs.writeFile('README.md',READMEcontent,(err) =>
        err ? console.log(err) : console.log('README created')
        )
    })

