# linux 查询类命令


## 根据端口查询应用

````shell
    lsof -i:8080
    # 查询到pid 之后
    
    cd /proc/pidNum
    # 进入到proc 虚拟文件中，这个文件中以每个进程pid 为名字

    # 下边这个命令可以查看进程所在的目录
    ll cwd 
    
    # 下边这个命令可以查看所调用的程序
    ll exe
````

