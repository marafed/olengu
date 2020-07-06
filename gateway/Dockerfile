FROM debian:buster
RUN apt update && \
    apt -y install nginx ca-certificates ssl-certs
CMD /usr/sbin/nginx -g "daemon off;"
