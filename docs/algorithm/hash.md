## 思路

简单插入排序的改进版。与插入不同之处在于，它会优先比较距离较远的元素。又叫缩小增量排序。

 

## 复杂度

| 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度 | 稳定性 |
| :---------: | :-------:| :------: | :----: | :------: |
| $$n^2$$    | $$n^2$$    | n     | 1     | 不稳定 |

 

## 算法描述

1. 选择一个增量t1，t2，。。。，tk，其中ti > tj，tk = 1；
2. 按增量序列个数k，对序列进行k 趟排序；
3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度

 

 

```javascript
function shellSort(arr){
    var len = arr.length;
    for(var gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap/2)){
        for(var i = gap; i < len; i++){
            var j = i;
            var current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]){
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}
```

 

![动图演示](../imgs/algorithm/hash.gif)

 （图片素材来源于网上）