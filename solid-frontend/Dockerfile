# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serveur nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copie du fichier de config nginx (facultatif)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
