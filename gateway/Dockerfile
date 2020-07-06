FROM debian:buster
RUN apt update && \
    apt -y install nginx ca-certificates ssl-cert
CMD /usr/sbin/nginx -g "daemon off;"
