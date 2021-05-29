let fs = require('fs');
let path = require('path');
let tree = require('./commands/tree');
let help = require('./commands/help');
let org = require('./commands/organiser');
let input = process.argv.slice(2);

switch(input[0])
{
    case ("help"):
        help.helpkey();
        break;
    case("tree"):
        tree.tree(input[1]);
        break;
    case("organiser"):
        org.organisekey(input[1]);
        break;
}
