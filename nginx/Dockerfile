FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY dev.conf /etc/nginx/conf.d
COPY /home/ulies/Downloads/letsencrypt-stg-root-x1.pem  /etc/nginx/snippets/letsencrypt-stg-root.pem