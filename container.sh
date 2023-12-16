#!/usr/bin/env bash
IMAGE=lv_react_antd:local
docker build -t $IMAGE .

SECRET_KEY_BASE=$(mix phx.gen.secret)

docker run -it --rm -p 4000:4000 \
  -e PHX_SERVER=true \
  -e PHX_HOST=localhost \
  -e SECRET_KEY_BASE=$SECRET_KEY_BASE \
  $IMAGE
