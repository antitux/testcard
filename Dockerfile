FROM nginx
COPY site /srv/site
RUN rm -rf /usr/share/nginx/html &&\
    cp -a /srv/site /usr/share/nginx/html &&\
    chown -R nginx:nginx /usr/share/nginx/html &&\
    rm -rf /srv/site