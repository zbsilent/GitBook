# MAC常用命令

 

### MAC 查看端口命令

```text
sudo lsof -nP | grep LISTEN | grep 8080
```

**管理员权限**

```text
sudo chown -R $(whoami) $(brew --prefix)/*
```

**显示隐藏文件**

```bash
command+shift+.
```

**shell 看到隐藏文件**

```text
ls -ah
```

**硬盘热插拔无法加载问题**

```text
ps aux | grep fsck
sudo pkill -f fsck
```

**启动 MAC 的 TOMCAT**

```shell
# 修改catalina.sh文件
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home
export JRE_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_261.jdk/Contents/Home
## mac mini 路径
export JAVA_HOME=/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312/Contents/Home
# 进入下面目录
/Users/zbsilent/apache-tomcat-9.0.44/bin
# 授权
sudo chmod 755 *.sh
# 启动
sudo sh ./startup.sh
# 修改密码
conf/tomcat-users.xml
<user username="root" password="281992" roles="manager-gui" />

```

### 管理 node

```shell
 sudo n 14.14.0

 https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md
```

sudo lsof -nP | grep LISTEN | grep 8080

### _mac jdk_ 默认安装目录

- 系统默认

  - /System/Library/Java/JavaVirtualMachines/

  - /Library/Java/JavaVirtualMachines/jdk1.8.0_311.jdk

- 用户
  - /Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312
- nodejs 安装目录 /usr/local/bin 目录下 是根目录

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_311.jdk/Contents/Home



### 管理mac安装

> sudo spctl --master-disable 打开所有来源

### Nacos

Install

1.启动命令先切换 JDK

```sh
cd OpenSource/nacos/bin
export JAVA_HOME=/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312/Contents/Home
sh startup.sh -m standalone

```

2.[访问管理](http://127.0.0.1:8848/nacos/login.html)
用户 nacos/nacos

3.关闭

```sh
sh shutdown.sh
```



### NPM 安装路径

npm list --depth=0 --global

## 查看 brew 路径

brew list
