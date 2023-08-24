FROM node:20-slim

USER root

# Atualize o sistema e instale as dependências necessárias
RUN apt-get update && apt-get install -y libssl-dev


WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null"	 ]