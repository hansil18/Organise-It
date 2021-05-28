let fs = require('fs');
let path = require('path');
let help = require('./commands/help');
let tree = require('./commands/treehhh');
let input = process.argv.slice(2);

switch(input[0])
{
    case ("help"):
        help.helpkey();
        break;
    case("tree"):
        tree.treekey(input[1]);
        break;
    case("organiser"):
        break;
}
