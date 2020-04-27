常用 `linux shell` 命令



## ls

显示当前目录文件列表

`ls -a` 显示所有的文件包括隐藏文件

`ls -l` 显示文件属性，包括大小、日期、符号链接等。



## cd

`cd dir` 切换到当前目录的 `dir` 文件下

`cd /` 切换到根目录

`cd ..`  切换到上一级

`cd ~` 切换到用户目录



## cp

复制文件

`cp source target` 将文件 `source` 复制为 `target`

`cp /root/xxx .` 将文件 `/root/xxx` 复制到当前目录下

`cp -av source_dir target_dir `  复制整个目录 `source_dir` 为 `target_dir`



## rm

删除命令

`rm file` 删除一个文件

`rm -f file` 删除的时候不提示。

`rm -r dir` 删除目录以及子文件

`rm -r *` 删除当前目录下所有内容



## mv

移动命令

```shell
mv [options] source target
```

`options` 参数

+ `-i `如果同名，询问是否覆盖
+ `-f `不询问



`mv source target`  修改文件 `source` 名字为 `target`

`mv source target_dir ` 移动文件 `source` 到 目录 `target_dir ` 下。

`mv source_dir target_dir` 目标目录已经存在，则移动到目标目录中。不存在，在修改名称为目标目录。





