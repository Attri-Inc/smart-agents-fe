########## BUILD ##########
FROM node:18-alpine

WORKDIR '/app'

COPY package.json package-lock.json ./

RUN npm ci
COPY . .

RUN npm run build

########### RUN ###########
FROM steebchen/nginx-spa:stable

COPY --from=0 /app/dist /app

EXPOSE 80

CMD ["nginx"]