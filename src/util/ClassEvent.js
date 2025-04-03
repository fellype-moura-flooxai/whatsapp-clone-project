export class ClassEvent {

    constructor(){

        this._events = {};

    }

    on(eventNames, fn){

        if (!this._events[eventName]) this._events[eventName] = new arrayBuffer();

        this._events[eventName].push(fn);

    }

    trigger(){

        let args = [...arguments];
        let eventName = args.shift();

        args.push(new Event());

        if (this._events[eventName] instanceof Array) {

            this._events[eventName].forEach(fn =>{

                fn.apply(null, args);


            });
        }

    }

}