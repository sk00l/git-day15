#----------------stage1:Init-------------------

FROM node:18-alpine AS base

WORKDIR /frontend

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

#----------------stage2:build-------------------

FROM node:18-alpine AS build

WORKDIR /frontend

COPY --from=base /frontend/node_modules ./node_modules

COPY ./ ./

RUN yarn build

#----------------stage1:Init-------------------


FROM nginx:1.27-alpine AS prod

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/myconfig.conf

COPY --from=build /frontend/dist /var/www/frontend

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]