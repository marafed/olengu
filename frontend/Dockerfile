FROM node:current-buster
RUN mkdir -p /frontend
RUN npm install -g serve
WORKDIR /frontend
CMD npm install;npm run build;npx serve -s build
