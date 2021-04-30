const fs = require('fs');
const { nextTick } = require('process');
setTimeout(()=>{
    console.log("script begin");
    let time1 =new Date().getTime()
    fs.readFile('./redux.txt',()=>{
        let time3 = new Date().getTime();
        while(time3-time1<100){
            time3 = new Date().getTime();
        }
        console.log("time3 -time1",time3-time1);
    })
    setTimeout(()=>{
        let time2 = new Date().getTime();
        console.log("time2-time1:",time2 - time1);
        new Promise((resolve)=>{
        console.log("promise")    
        resolve("promise then")}).then(value=>console.log(value))
    },1000);

    setTimeout(()=>{
        let time4 = new Date().getTime();
        console.log("time4-time1:",time4 - time1);
        nextTick(()=>{
            console.log("nextTick")
        })
    },1000);
    setImmediate(()=>{
        console.log("immediate")
    });
},100)