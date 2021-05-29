let utl = require('../utility');
let fs = require('fs');
let path = require('path');
function organise(dirname) {
    // console.log(dirname);
    let dest;
    if(dirname == undefined) {
        dirname = process.cwd();
    }
    let exist = fs.existsSync(dirname);
    if(!exist) {
        console.log("please enter valid path");
        return;
    }
    else {
        dest = path.join(dirname,'final');
        let existdest = fs.existsSync(dest);
        if(!existdest) {
            fs.mkdirSync(dest);
        }
    }
    organisehelper(dirname,dest);
}

function organisehelper(dirname,dest) {
    // console.log(dirname);
    let child = fs.readdirSync(dirname);
    for(let i = 0; i < child.length; i++) {
        let childurl = path.join(dirname,child[i]);
        if(fs.lstatSync(childurl).isFile()) {
            let cato = getcat(childurl);
            console.log(cato);
            let catourl = path.join(dest,cato);
            if(!fs.existsSync(catourl)) {
                fs.mkdirSync(catourl);
            }
            copyfile(childurl,catourl);
        }
    }
}

function copyfile(dirname,dest) {
    let name = path.basename(dirname);
    let finalfile = path.join(dest,name);
    fs.copyFileSync(dirname,finalfile);
}

function getcat(dirname) {
    let ext = path.extname(dirname).slice(1);
    for(let i in utl.types) {
        let extension = utl.types[i]; 
        for(let j = 0; j < extension.length; j++) {
            if(extension[j] == ext) {
                return i;
            }
        }
    }
    return 'others';
}

module.exports = {
    organisekey : organise
}

// node main.js organiser "C:\Users\hansil\Downloads\Friends.The.Reunion.2021.1080p.WEBRip.x264-RARBG"