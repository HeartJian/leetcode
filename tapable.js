const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook 
 } = require("tapable");

//  const FrontEnd = new SyncHook(['name']);

//  FrontEnd.tap('webpack',(name)=>{
//     console.log(name+"get webpack")
//   });

//   FrontEnd.tap('react',(name)=>{
//     console.log(name+"get react")
//   });

//   FrontEnd.start=(name)=>{
//     FrontEnd.call(name)
//   };

//   FrontEnd.start('xiaoming');


  class Car {
      constructor(){
          this.hooks ={
            accelerate:new SyncHook(["newSpeed"])
          }
      }

      setSpeed(newSpeed){
          this.hooks.accelerate.call(newSpeed)
      }
  }

  const car  = new Car()

  car.hooks.accelerate.tap('plugin',(speed)=>{
      if(speed>200){
          console.log('speed plus')
      }
  })

  car.setSpeed(201)