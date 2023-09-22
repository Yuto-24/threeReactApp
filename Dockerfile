# ベースイメージの指定
FROM node:18.16.0-bullseye

USER root
# ADD . /ins_env
# WORKDIR /ins_env

# 環境変数 proxy設定
ENV http_proxy=http://proxy.otsuka-shokai.co.jp:8080
ENV https_proxy=http://proxy.otsuka-shokai.co.jp:8080
ENV TZ=Asia/Tokyo

RUN apt update -y

# npm ver. 9.6.7
RUN npm install -g npm@9.6.7

# npm, yarn: proxy 設定
RUN npm -g config set proxy ${http_proxy} \
    && npm -g config set https-proxy ${https_proxy} \
    && npm install -g tar@latest \
    && yarn config set proxy ${http_proxy} -g \
    && yarn config set https-proxy ${https_proxy} -g

# React アプリケーションの作成
WORKDIR /projects
RUN npm install -g create-react-app \
    && npm i tar
# && npx create-react-app pokemon_dict --template typescript

# ### material UI
# RUN npm install -g @mui/material @emotion/react @emotion/styled
# RUN yarn add -g @mui/material @emotion/react @emotion/styled

# エイリアスの追加
RUN echo "alias ll='ls -al'" >> ~/.bashrc \
    && echo "source ~/.bashrc" > ~/.bash_profile

# コンテナログイン時のディレクトリ指定

WORKDIR /projects
ADD .jsbeaurifyrc /projects
# CMD [ "/run.sh" ]
