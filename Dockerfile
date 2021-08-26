# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:16-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

#install arduino-cli
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | BINDIR=/usr/local/bin sh
RUN arduino-cli core update-index
RUN arduino-cli core install arduino:avr

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --production
# Copy local code to the container image.
COPY . ./

EXPOSE 3000

# Run the web service on container startup.
CMD ["node", "index.js"]
