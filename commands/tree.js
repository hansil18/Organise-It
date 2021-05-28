let fs = require('fs');
let path = require('path');
function tree(dirname){
    if(dirname == undefined) {
        treehelp(process.cwd(),"");
    }
    else {
        let exist = fs.existsSync(dirname);
        if(exist){
            treehelp(dirname,"");
        }
        else{
            console.log("enter valid path");
            return;
        }
    }
}
function treehelp(dirname,indent){
    let isFile = fs.lstatSync(dirname).isFile();
    if(isFile){
        let filename = path.basename(dirname);
        console.log(indent + "├──" + filename);
    }
    else{
        let foldername = path.basename(dirname);
        console.log(indent + "└──" + foldername);
        let child = fs.readdirSync(dirname);
        for(let i = 0; i < child.length; i++)
        {
            let childPath = path.join(dirname,child[i]);
            treehelp(childPath,indent + "\t");
        }
    }
}

module.exports.tree = tree;
