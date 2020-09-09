/**
 * 一个发布-订阅模式的实现
 * 用来解决两个任意组件间的数据传递（一般是非父子组件，因为父子组件用props更好）
 */

 const eventProxy = {
     inObj: {},
     initObj:{},
     in: (key,fn) => {
         this.inObj[key] === undefined ? this.inObj[key] = [] : this.inObj[key].push(fn);
     },
     init: (key, fn) => {
         this.initObj[key] === undefined ? this.initObj[key] = [] : this.initObj[key].push(fn);
     },
     off: (key) => {
         this.inObj[key] = [];
         this.initObj[key] = [];
     },
     trigger: () => {
         let key, args;
         arguments.length != 0 ? key = arguments[0] : false;
         args = [].concat(Array.prototype.slice.call(arguments, 1));

         if (this.inObj[key] !== undefined && this.inObj[key].length > 0 ) {
          for(let i in this.inObj[key]){ this.inObj[key][i].apply(null,args)} 
         }

         if (this.initObj[key] !== undefined && this.initObj[key].length > 0) {
             for (let i in this.initObj[key]) {
                 this.initObj[key][i].apply(null, args);
                 this.initObj[key] = []
             }
         }
     }
 }

 export default eventProxy;