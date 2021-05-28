function help()
{
    console.log(`
    List of the commands are following:
        node main.js //for any help needed or to see the command palette
        node main.js tree "dirpath" // for viewing the tree structure
        node main.js organise "dirpath" // for organising the files in the directory
    `)
}
module.exports = {
    helpkey : help
}