#!/usr/bin/env sh  
ssh ubuntu@3.111.39.117 << EOF 
 ls
 cd /home/ubuntu/budget-for-justice 
 kill $(lsof -t -i:3000)
 git pull origin data_integration      
 npm run start &   
 exit      
 EOF