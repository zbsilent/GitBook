# Docker


```xml

#build ssh images
#
#VERSION        1.0
FROM ubuntu:latest
RUN apt-get update
RUN adduser -disabled-password zbsilent 
# 开始安装
RUN apt-get -y install nodejs && \
apt-get -y install npm  
# 切换淘宝镜像
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org 
# 安装VIM 
RUN apt-get -y install vim
# 安装VUE
RUN cnpm install vue && \
cnpm install -g @vue/cli  
# 安装ssh
RUN apt-get install -y openssh-server
RUN echo 'root:root' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSH login fix. Otherwise user is kicked off after login
RUN sed -ri 's/^PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config

RUN mkdir /var/run/sshd
#EXPOSE 映射端口
EXPOSE 22
# zsh
RUN apt-get update && apt-get install -y \
    zsh \
    git-core && rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
    && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \
    && chsh -s /bin/zsh
# RUN mkdir /home/vue3
# WORKDIR /home/vue3
# RUN vue create vue3-pro
#Start ssh Service
CMD ["/usr/sbin/sshd", "-D"]

```


 