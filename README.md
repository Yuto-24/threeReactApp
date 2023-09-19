## To start React App

execute below

```bash
docker-compose build

# docker-compose run --rm [service name] sh -c 'npx create-react-app [app name] --template typescript'
# pokemon app (first app)
docker-compose run --rm first sh -c 'npx create-react-app pokemon --template typescript'
# blog app (second app)
docker-compose run --rm second sh -c 'npx create-react-app blog --template typescript'
# note app (third app)
docker-compose run --rm third sh -c 'npx create-react-app note --template typescript'

docker-compose up -d && docker-compose logs
```

## MEMO

```bash
docker-compose down && docker-compose build && docker-compose up -d && docker-compose logs
docker-compose down && docker-compose build --no-cache && docker-compose up -d && docker-compose logs
```

```bash
git config user.name Yuto-24
git config user.email utomatsu@gmail.com
```
