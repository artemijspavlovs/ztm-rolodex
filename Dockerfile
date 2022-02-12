FROM node:14.0.0-alpine as builder

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn -s
COPY ./dist/ ./

RUN yarn build

FROM nginx:1.17.5-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]