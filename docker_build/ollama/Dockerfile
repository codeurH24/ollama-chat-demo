FROM node:20

RUN apt update && apt install -y curl

RUN curl https://ollama.ai/install.sh | sh

RUN apt update && apt install -y nano

ENTRYPOINT [ "ollama", "serve" ]
