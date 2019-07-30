//  app.js   测试代码
import sum from './index'

let SDK = {
    show: () =>{
        console.log('this is function')
    },
    init(options){
        let _opt = {
            name:'zhangsan',
            age: 23
        }
        // options = Object.assign(_opt,options);
        console.log(_opt);
    },
    sum,
}

window.SDK = SDK;