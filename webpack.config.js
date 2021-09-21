const {resolve}=require("path");

module.exports={
    watch:true,
    entry: {
    startScreen:"./startScreen.js",
    categories:"./categories.js",
    game:"./game.js",
    endScreen:"./endScreen"
    },
    output:{
        filename:"[name].bundle.js",
        path: resolve(__dirname,"dist")
        
    },
    mode:"development"
}