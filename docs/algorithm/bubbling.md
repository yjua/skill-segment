## 思路

每次比较相邻两个，大的交换在后面。通过两两比较，把最大的冒泡到最后面。

 

## 复杂度

| 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度 | 稳定性 |
| :-------: | :-------: | :-----: | :----------: | :------: |
| $$n^2$$   | $$n^2$$   | n    | 1         | 稳定   |

 

## 算法描述

1. 两层for循环，每一个元素都要跟之后相邻的元素进行比较。
2. 如果第一个元素大于第二个元素，则交换两个的值。
3. 针对所有元素重复上面的操作

 

## 代码实现

```javascript
// 从小到大排序
function bubbleSort(arr){
    var len = arr.length ;
    for(var i = 0; i<len-1 ; i++){
        for(var t = 0; t < len - 1 - i; t++){
            if(arr[t] > arr[t+1]){
                temp = arr[t]
                arr[t] = arr[t+1];
                arr[t+1] = temp;
            }
        }
    }
    return arr;
}
 
 
 
// 执行查看效果
var arr = [];
for(var i =0;i< 10 ;i++){
    var k = Math.ceil(Math.random() * 100)
    arr.push(k);
}
console.log('------start---------')
console.log(arr)
console.log(bubbleSort(arr));
console.log('-----end--------')
```

 

![动图演示](../imgs/algorithm/bubbling.gif)

 （图片素材来源于网上）