"use strict";
let fs = require('fs'),
	exec = require('child_process').exec,
	str = 'npm uninstall';
    
let dirs = null;
let batchAmount = parseInt(process.argv0)||5;
console.log( batchAmount, process.argv0);
try{
	dirs = fs.readdirSync('./node_modules');
}catch(e){
    console.error('Error:', "Maybe no node_modules directory of project at here" )
    return;
}
uninstallBatch( dirs );

function uninstallBatch( projetPath ){
    if( projetPath.constructor != Array || !projetPath.length) return;
    var exeStr = str,
        batchPath = [];
    if( projetPath.length > batchAmount ){
        batchPath = projetPath.splice(0, batchAmount);
    }else{
        batchPath = projetPath;
    }
    
    for(var i=0;i<batchPath.length;i++){
        exeStr+=" "+batchPath[i];
    }
    try{
        exec(exeStr, function (error, stdout, stderr) {
            if (error) {
                console.log('\x1b[31m', 'exec error: ' + error);
                console.log('\x1b[37m', ''); //restore white                
            }
            console.log('\x1b[32m','Successful: ', exeStr );
            console.log('\x1b[37m','\n' + stdout.toString());
            //console.log('---'); //restore white
            
            //console.log('Error', stderr);
            //console.log('\x1b[37m', ''); //restore white
            
            uninstallBatch(projetPath);
        })
    }catch(e){
        console.log('uninstall exception', batchPath.join(","));
    }
}