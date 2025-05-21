# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

COPY . .

# Accept backend URL as build-time argument
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Fix for OpenSSL error with Webpack and Node 18+
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install && npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# docker build --build-arg REACT_APP_BACKEND_URL=http://backend:8080/api/tasks -t sidraut007/todo-frontend:4 .
