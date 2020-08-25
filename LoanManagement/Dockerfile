FROM node:10-alpine as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
##RUN npm run ng build -- --prod --output-path=dist
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=node /app/dist/LoanManagement /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d