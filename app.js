const fs = require('fs');
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portfolio complete!')
});









// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// }

// profileDataArr.forEach(profileItem => console.log(profileItem));

// printProfileData(profileDataArgs);
