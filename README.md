# ztm-rolodex

ztm react course application to grasp react basics, using functional components with hooks instead of class component from the course

### Stack

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)

## Running

### Locally

```
git clone git@github.com:artpav-dev-projects/ztm-rolodex.git && cd ./ztm-rolodex
yarn
yarn dev --host
```

### Docker

```shell
docker build ./ -t artpav-dev-project/ztm-rolodex
docker run -d -p 8089:80 --name rolodex artpav-dev-project/ztm-rolodex
docker logs rolodex --follow
```

```shell
curl localhost:8089/
```