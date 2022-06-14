#!/usr/bin/env sh  
ssh ubuntu@3.111.39.117 << EOF 
 ls
 cd /home/ubuntu/budget-for-justice 
 git pull origin data_integration
 ls
 lsof -i udp:3000 | awk '/3000/{print $2}' | xargs kill    
 npm run start &   
 exit      
 EOF