# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port & start app
EXPOSE 5001
CMD ["npm", "start"]
