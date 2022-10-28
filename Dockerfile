FROM node:15.4 as BUILD
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/skill-tracker/ /usr/share/nginx/html
