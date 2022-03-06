# 202203 spring实战项目问题记录





#### 1. sudo npm install n -g

##### 2.安装稳定版本 sudo n stable 

##### 3. 安装最新版本 sudo n stable

##### 4. 降级/升级 sudo n latest

当前版本是 17.3.0



降级到 14.17.3

sudo n 14.17.3

安装nvm 

```
nvm                  // 会提示nvw下的相关命令
nvm ls               // 查看已安装node版本
nvm install vXX      // 安装对应vXX版本的node
nvm uninstall vXX    // 卸载对应vXX版本的node
nvm use xxx          // 选择使用XXX版本
```





问题：

node版本问题，需要用 nvm 切换node版本

~~sdaf~~

~~删除线~~

`Request:`

_Correct the classpath of your application so that it contains compatible versions of the classes org.apache.catalina.authenticator.AuthenticatorBase and javax.servlet.ServletContext_

`solution：`

 

scope=compile的情况（默认scope),也就是说这个项目在编译，测试，运行阶段都需要这个artifact(模块)对应的jar包在classpath中。
而对于scope=provided的情况，则可以认为这个provided是目标容器已经provide这个artifact。换句话说，它只影响到编译，测试阶段。在编译测试阶段，我们需要这个artifact对应的jar包在classpath中，而在运行阶段，假定目标的容器（比如我们这里的liferay容器）已经提供了这个jar包，所以无需我们这个artifact对应的jar包了。==

```xml
<scope>provided</scope> 排除掉
```