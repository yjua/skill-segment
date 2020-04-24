## 思路

对于未排序数据，在已排序序列中从后往前扫描，找到相应位置插入。

## 复杂度

| 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度 | 稳定性 |
| :---------: | :-----------: | :--------: | :----------: | :------: |
| $$n^2$$     | $$n^2$$       | n          | 1            | 稳定   |

 

## 算法描述

+ 从第一个元素开始，该元素认为已经被排序
+ 取下一个元素，在已经排序的元素序列中从后向前扫描
+ 如果该元素（已经排序）大于新元素，将该元素移动到下一个位置
+ 重复第三步，直到找到已排序的元素小于或者等于新元素的位置
+ 将新元素插入到该位置
+ 重复以上步骤

 

## 代码实现

```javascript
// 插入排序
function insertSort(arr){
    for(var i = 1; i<arr.length;i++){
        for(var j = i; j>0;j--){
            if(arr[j-1] > arr[j]){
                swap(arr,j-1,j);
            }else{
                break;
            }
        }
    }
    function swap(arr,i,j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
    return arr;
}
 
// 运行结果
var arr = [];
for(var i =0;i< 10 ;i++){
    var k = Math.ceil(Math.random() * 100)
    arr.push(k);
}
console.log('------start---------')
console.log(arr)
console.log(insertSort(arr));
console.log('-----end--------')
```

 

![动图演示](../imgs/algorithm/insert.gif)

 （图片素材来源于网上）