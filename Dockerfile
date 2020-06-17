FROM node:10-alpine
WORKDIR /data
COPY ./build .
RUN npm i -g serve
EXPOSE 5000
CMD ["serve", "-s"]
