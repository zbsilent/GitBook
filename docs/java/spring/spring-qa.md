# 202203 spring实战项目问题记录



##### 1. 技术选型

![image-20220306111652337](/Users/zbsilent/Library/Application Support/typora-user-images/image-20220306111652337.png)



##### 2. 版本选型

| Spring Cloud Alibaba Version | Sentinel Version | Nacos Version | RocketMQ Version | Dubbo Version | Seata Version |
| ---------------------------- | ---------------- | ------------- | ---------------- | ------------- | ------------- |
| 2021.0.1.0*                  | 1.8.3            | 1.4.2         | 4.9.2            | 2.7.15        | 1.4.2         |

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





干掉

`Request:` Did you forget to include spring-cloud-starter-loadbalancer

`solution：` 由于SpringCloud Feign在Hoxton.M2 RELEASED版本之后不再使用Ribbon而是使用spring-cloud-loadbalancer，所以不引入spring-cloud-loadbalancer会报错
加入spring-cloud-loadbalancer依赖 并且在nacos中排除ribbon依赖，不然loadbalancer无效

```java
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    <exclusions>
        <exclusion>
            <groupId> springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-loadbalancer</artifactId>
    <version>2.2.4.RELEASE</version>
</dependency>

```





##### 3.Nacos配置中心使用

```properties
# DataId By default, the `spring.application.name` configuration is combined with the file extension (the configuration format uses properties by default), and the GROUP is not configured to use DEFAULT_GROUP by default. Therefore, the Nacos Config configuration corresponding to the configuration file has a DataId of nacos-config.properties and a GROUP of DEFAULT_GROUP
spring.application.name=nacos-config
spring.cloud.nacos.config.server-addr=127.0.0.1:8848
```



必须

```xml
@RefreshScope
@Value("${coupon.user.userName:xiudou}")
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```

##### 4.GateWay

```
spring:
  cloud:
    gateway:
      routes:
        - id: test-route
          uri: https://www.baidu.com
          predicates:
            - Query=url,baidu
        - id: qq_route
          uri: https://www.qq.com
          predicates:
            - Query=url,qq
```

请求参数 如果带url 值 是qq的 则前往 qq

##### 三级分类

