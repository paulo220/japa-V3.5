#!bin/bash
verde="\033[0;32m"
CYAN="\033[1;36m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'
BRANCO='\033[1;37m'
while : 
do
echo "${PURPLE}Iniciando o Japa, aguarde..."
    node japa.js
    sleep 1

done


#sistema para o bot não cair
# de sh start.sh no termux!!