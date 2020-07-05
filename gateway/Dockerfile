FROM debian:buster
RUN apt update && \
    apt -y install nginx ca-certificates
CMD /usr/sbin/nginx -g "daemon off;"
