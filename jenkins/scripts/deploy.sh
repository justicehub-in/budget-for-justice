#!/usr/bin/env sh

echo 'The following command ssh into main server and pulls and deploys'
echo 'the build'
set -x
ssh ubuntu@3.111.39.117 <  cd /home/ubuntu/budget-for-justice 
 kill $(lsof -t -i:3000)
 git pull origin data_integration     
 npm run build
 npm run start &
 sleep 1
 exit      
set +x


echo 'The build is done and website is up'
echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'

