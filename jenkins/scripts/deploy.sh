#!/usr/bin/env sh  
ssh ubuntu@3.111.39.117 << EOF 
 ls
 cd /home/ubuntu/budget-for-justice 
 git pull origin data_integration
 ls
 fuser -k 3000/tcp   
 npm run start &  
 exit      
 EOF