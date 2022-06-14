#!/usr/bin/env sh  
ssh ubuntu@3.111.39.117 << EOF 
 ls
 fuser -k 3000/tcp 
 cd /home/ubuntu/budget-for-justice 
 git pull origin data_integration
 pwd
 echo $PATH
 /home/ubuntu/.nvm/versions/node/v16.13.0/bin/npm run start 
 exit      
 EOF