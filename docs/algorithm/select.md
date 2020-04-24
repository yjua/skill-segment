## 思路

在未排序中找到最小（大）元素，放在排序起始位置，再从剩余排序元素中找到最小（大）元素，放在已排序末尾，以此类推。

 

## 复杂度

| 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度 | 稳定性 |
| :---------: | :---------: | :-----------: | :----------: | :------: |
| $$n^2$$            | $$n^2$$            | $$n^2$$            | 1          | 不稳定 |

 

## 算法描述

1. 从第一个元素开始，比较每一个元素。
2. 记住最小的一个值，当轮询完之后，交换第一个元素和最小的元素之间的值。
3. 重复上面两步，排序第二个、第三个。。。

 

## 代码实现

```javascript
// 从小到大排序
function selectionSort(arr){
    var len = arr.length;
    var min = 0;
    for(var i = 0; i <len;i++){
        min = i;
        for(var t = i+1; t < len;t++){
            if(arr[t] < arr[min]){
                min = t;
            }
        }
        var temp =arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
 
    return arr;
}
 
// 运行查看结果
var arr = [];
for(var i =0;i< 10 ;i++){
    var k = Math.ceil(Math.random() * 100)
    arr.push(k);
}
console.log('------start---------')
console.log(arr)
console.log(selectionSort(arr));
console.log('-----end--------')
```

 

两层嵌套for循环，时间复杂度是O(n^2)

 

![动图演示](../imgs/algorithm/select.gif)

 （图片素材来源于网上）