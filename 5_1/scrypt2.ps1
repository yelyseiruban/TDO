docker volume create nodejs_data

New-Item -Path ./app -ItemType Directory | Out-Null
Set-Content -Path ./app/message.txt -Value "Hello from Node.js container!"

docker run -it --name nodejs_container -v nodejs_data:/app node:latest

docker volume create all_volumes

docker run --rm -v nginx_data:/source -v all_volumes:/destination busybox cp -R /source /destination/nginx_data

docker run --rm -v nodejs_data:/source -v all_volumes:/destination busybox cp -R /source /destination/nodejs_data