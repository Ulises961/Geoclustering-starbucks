FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY dev.conf /etc/nginx/conf.d
COPY /etc/ssl/certs/mockpass.pem /etc/ssl/certs/mockpass.pem
COPY /home/ulises/mockpass.key /etc/ssl/private/mockpass.key
COPY /home/ulises/mockpass.crt /etc/ssl/certs/mockpass.crt
