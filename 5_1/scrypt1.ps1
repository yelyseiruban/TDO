docker volume create nginx_data

docker build -t image_nginx .

docker run -d -p 80:80 --name nginx_container -v nginx_data:/usr/share/nginx/html image_nginx