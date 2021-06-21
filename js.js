// 数组去重
function reduceDuplicate(array) {
    const result = [];
    array.forEach(a => {
        result.indexOf(a) == -1 && result.push(a)
    })
    return result;
}

// 实现lodash 的get
function get(obj,path){
    const paths = path.replace(/\[(\d+)\]/g,".$1").split(".");
    let queryObj =obj;
    for(let p of paths){
        queryObj = Object(queryObj)[p];
    }
    return queryObj;
}


// 实现一个累加add
function add() {
    let args = Array.prototype.slice.apply(arguments);
    function addSelf() {
        args = [...args, ...Array.prototype.slice.apply(arguments)];
        return addSelf
    }
    addSelf.toString = () => {
        return args.reduce(function (a, b) {
            return parseFloat(a) + parseFloat(b)
        })
    }
    return addSelf;

}

// 实现一个compose函数,入参(fn1,fn2,fn3)(args),得到效果compose(fn1(fn2(fnar3(args))))
function compose() {
    let argsFn = Array.prototype.slice.apply(arguments);
    return function (...args) {
        if (argsFn.length < 1) {
            argsFn.length && argsFn[0](...args)
        };
        return argsFn.reduce((pre, next) => {
            return typeof pre == 'function' ? next(pre(...args)) : next(pre)
        })
    }
}

// 实现一个事件中心
class EventHub {
    constructor() {
        this.eventQueue = {};

    }

    on(key, fn) {
        const queue = this.eventQueue[key] || [];
        if (queue.indexOf(fn) === -1) {
            queue.push(fn)
        };
        this.eventQueue[key] = queue;
    }

    off(key, fn) {
        const queue = this.eventQueue[key] || [];
        const index = queue.indexOf(fn);
        if (index !== -1) {
            this.eventQueue[key] = queue.filter((_, idx) => index !== idx)
        };
    }

    emit(key) {
        const queue = this.eventQueue[key] || [];
        const args = Array.prototype.slice.call(arguments);
        queue.forEach(fn => fn(...args.slice(1, args.length)));
    }

    once(key, fn) {
        const queue = this.eventQueue[key] || [];
        const warpperFn = (...args) => {
            fn(...args);
            this.off(warpperFn, key);
        }
        queue.push(warpperFn);
        this.eventQueue[key] = queue;
    }
}

let eventhub = new EventHub()
function a(x) {
    console.log('a===>', x)
}
function b(x, y) {
    console.log('b===>', x, y)
}
eventhub.on(a, 'console');
eventhub.once(b, 'console');
eventhub.emit('console', 1, 2);

// 实现一个节流防抖函数
function wrapper(fun, time) {
    const now = new Date().getTime();


}


function wrapper2(fun, time) {

}

function wrapper2(fun, time) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                fun()
            }, time);
        }
    }
}