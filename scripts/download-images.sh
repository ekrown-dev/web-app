#!/bin/bash

# Create necessary directories
mkdir -p public/images/services
mkdir -p public/images/team

# Download background images
curl -o public/images/background.png "https://raw.githubusercontent.com/ekrown/web-app/main/public/images/background.png"
curl -o public/images/high-connectivity.png "https://raw.githubusercontent.com/ekrown/web-app/main/public/images/high-connectivity.png"

# Download service images
curl -o public/images/services/networking.jpg "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
curl -o public/images/services/system-admin.jpg "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
curl -o public/images/services/devops.jpg "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"

# Download team images
curl -o public/images/team/sarah.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
curl -o public/images/team/michael.jpg "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"

# Make the script executable
chmod +x scripts/download-images.sh 