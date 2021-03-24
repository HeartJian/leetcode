function setMixin(target, mixin) {
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      target.prototype[arguments[i]] = mixin[arguments[i]];
    }
  } else {
    for (var methodName in mixin) {
      if (!Object.hasOwnProperty(target.prototype, methodName)) {
        console.log("set",mixin,mixin[methodName])
        target.prototype.actionLog = 1
        // target.prototype[methodName] = mixin[methodName];
      }
    }
  }
}

let a =  {
   actionLog: function () {
    console.log('action...');
  }
};

function saya() {
  let actionLog = 2
}

const loga = new saya()
setMixin(loga, a);
loga.actionLog && loga.actionLog();