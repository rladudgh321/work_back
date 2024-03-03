FROM node:20
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm install && npm run build
EXPOSE 4000
CMD ["node", "dist/main.js"]