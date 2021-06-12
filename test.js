

class Mypromise {
    PENDING = "pending"
    FUILIED = "fuilied"
    REJECTED = "rejected"
    constructor(excutor) {
        this.status = this.PENDING;
        this.resolveQueue = [];
        this.rejectQueue = [];
        const rejected =()=>{}
        const resolve = (value) => {
            this.status = this.FUILIED;
            if (this.resolveQueue.length == 0) return;

            setTimeout(() => this.resolveQueue.forEach(a=>a(value)))
        }

        excutor(resolve, rejected);
    }

    then(resolveFn,rejectedFn) {
        return new Mypromise((resolve, rejected) => {
            const resFn =(value)=>{
                try{
                    let result = resolveFn(value);
                    result instanceof Mypromise? result.then(resolve,rejected):resolve(x)
                }catch(error){
                    rejected(error)
                }
              
            };
            if(this.status == this.PENDING){
                this.resolveQueue.push(resFn)
            }
        })
    }
}


new Mypromise((resolve) => { console.log(1111); resolve() }).then(() => { console.log(2) })