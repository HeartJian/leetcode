docker

镜像 Image 
程序包，基础镜像+前端代码，pack构建出前端镜像

## 查看所有的镜像 
docker image ls

## 重新登录有权限的账号
 su - 
密码：10jqka@Znkf2018


容器 container
程序包跑起来，在服务器上面运行，类似进程，叫容器

## 查看所有运行中的容器
docker ps



==================================
## 进入镜像版本配置目录
cd /data/tool/script/znkf/data/yaml

## 查看当前目录中的内容
ls

1、callout-local-frontend.yml 
  thirdpartyfrontend:
    
2、callout-saas-frontend.yml 
  thsfrontend:
  jxsfrontend:
  websitefrontend:
    
3、callout-unified-frontend.yml 
  unifiedfrontend:
    
## 编辑镜像配置
1、在服务器上编辑
vi callout-local-frontend.yml
vi\vim linux 自带的文本编辑器 有一定的学习难度，自己查

2、把文件下下来修改完再传上去
下载文件
sz callout-local-frontend.yml

上传文件
cd /data/tool/script/znkf/data/yaml 
mv callout-local-frontend.yml callout-local-frontend.yml.20200426.bak #改文件名 备份
rz # 选中文件上传


## 进入启动脚本目录，重启
cd /data/tool/script/znkf/scripts
1、查看前端容器
docker ps | grep front
2、停止前端容器
docker stop m_jxsfrontend_1 #比较慢，等一会儿

3、删除停掉的容器
docker ps -a| grep frontend
docker rm m_thirdpartyfrontend_1

4、执行启动脚本
bash start-callout-frontend




// 进入容器
docker exec -it 容器名或者id bash






	
	