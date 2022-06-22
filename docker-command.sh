# Build
docker build -t gianosuryog/nodeexpress . --no-cache

# Run
docker run -d --name node_express -p 8080:3000 -v $(pwd):/app gianosuryog/nodeexpress