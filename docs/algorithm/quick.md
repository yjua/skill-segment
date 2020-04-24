最常用的排序算法，比冒泡、选择快上很多倍。

## 思路

通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

##  复杂度

| 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度  | 稳定性 |
| :-----------: | :----------: | :-------: | :-----------: | :------: |
| $$nlog_2n$$   | $$n^2$$  | $$nlog_2n$$  | $$nlog_2n$$ | 不稳定 |

 

## 算法描述

+ 先从数列中选一个数作为基准
+ 将比这个基准大的数全放到右边，小于或等于的放到左边
+ 再对左右区间重复第二步，直到各区间只有一个数。

 

```javascript
//从小到大排序
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    // 基准
    var pivot = arr.splice(0,1)[0];
    var left = [];
    var right = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i] > pivot){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
 
    return quickSort(left).concat(pivot,quickSort(right));
}
 
//运行结果
var arr = [];
for(var i =0;i< 10 ;i++){
    var k = Math.ceil(Math.random() * 100)
    arr.push(k);
}
 
 
console.log('------start---------')
console.log(arr)
console.log(quickSort(arr));
console.log('-----end--------')
```

 

![动图演示](../imgs/algorithm/quick.gif)

 （图片素材来源于网上）