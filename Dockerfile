# node镜像
FROM node:alpine
# 在容器中新建目录文件夹 app
RUN mkdir -p /app
# 设置工作目录, RUN/CMD命令会在工作目录进行
WORKDIR /app

# 环境变量
# ENV NODE_ENV=production
# 修改时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone
# 将 package.json 复制默认工作目录(先拷贝package.json目的是提高缓存命中率,如果之前构建过,就不用重新install)
COPY package*.json /app
# 配置依赖源
RUN npm config set register https://registry.npmmirror.com
# 安装依赖包
RUN npm install 
# 将前端项目文件复制到app目录
COPY . /app
# build
RUN npm run build

# 第二阶段
# nginx的alpine镜像
FROM nginx:alpine

# 将前端项目中的nginx配置复制到容器中的nginx目录中并改为default.conf
COPY  nginx.conf /etc/nginx/conf.d/default.conf
# 把打包好的前端项目复制到nginx/html文件夹下, --from=0表示从上一阶段拷贝文件
COPY --from=0 /app/dist /usr/share/nginx/html/
# docker内环境暴露80端口
EXPOSE 80
