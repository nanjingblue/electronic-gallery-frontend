yarn build
mv -r  ../dist ./dist
docker login --username=nanjingblue registry.cn-hangzhou.aliyuncs.com
docker build -t registry.cn-hangzhou.aliyuncs.com/nanjingblue/ee_gallery:v1.0.0 ./
docker push registry.cn-hangzhou.aliyuncs.com/nanjingblue/ee_gallery:v1.0.0