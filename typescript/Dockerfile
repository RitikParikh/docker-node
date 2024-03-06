# make a builder stage for nodejs version 18 via docker offical image
FROM node:18 as builder

#OS Directory  work dir set
WORKDIR /build

#Copy the package.json and package-lock.json copy to current working directory 
COPY package*.json .

#Node-module depanday install to our container
RUN npm install

COPY src/ src/
COPY tsconfig.json tsconfig.json

#make the dist folder to my docker container
RUN npm run build


#Runner stage
FROM node:18 as runner

WORKDIR /app

# copy from the builder stage
COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules
COPY --from=builder build/dist dist

CMD ["npm","start"]


#docker build -t typescript-express-docker-image . OR sudo docker build -t typescript-express-docker-image .
#docker images
# docker run -it -p 8000:8000 typescript-express-docker-image