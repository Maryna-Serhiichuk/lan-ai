#!/bin/bash
# cd /path/to/your/project/packages/backend
cd packages/backend
osascript -e 'tell application "Terminal" to do script "cd \"$(pwd)\" && yarn develop"'
cd ../frontend
osascript -e 'tell application "Terminal" to do script "cd \"$(pwd)\" && yarn start"'

# chmod +x start-servers.sh // script in teminal