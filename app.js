const express = require('express');
const glob = require('glob');

const app = express();

const call = (controllerName, functionName, req, res) => {
    let moduleLoad = {};
    glob.sync( './controllers/*.js' ).forEach( function( file ) {
        let dash = file.split("/");
        if(dash.length == 3) {                
            let dot = dash[2].split(".");
            if(dot.length == 2) {
                let key = dot[0];
                moduleLoad[key] = require(file);
            }
        }
    });

    if(moduleLoad[controllerName] !== undefined){
        const objController = new moduleLoad[controllerName](req, res);
        return objController[functionName]();
    } else {
        return {
            status:400,
            message:"Controller not found!"
        };
    }
}

app.get("/test", (req, res) => res.send(call('TestController', 'get', req)));
app.get("/test/:test_id", (req, res) => res.send(call('TestController', 'detail', req)));

app.listen(3000, () => {
  console.log(`Listening on port 3000!`);
});