#!/usr/bin/env sh  
ssh ubuntu@3.111.39.117 << EOF 
 ls 
 cd /home/ubuntu/budget-for-justice 
 git pull origin data_integration
 pwd
 PATH=$PATH:/home/ubuntu/.nvm/versions/node/v16.13.0/bin
 echo $PATH
 pm2 delete 0
 pm2 --name budget-for-justice start npm -- start
 pm2 ps
 exit      
 EOF