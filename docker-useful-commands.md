## How To Remove Docker Containers, Images, Volumes, and Networks


### Removing All Unused Objects

This command will remove all stopped containers, all dangling images, and all unused networks:

```dockerfile
docker system prune
```

If you also want to remove all unused volumes, pass the `--volumes` flag:

```dockerfile
docker system prune --volumes
```

### Removing Docker Containers

You can get a list of all active and inactive containers by passing the -a flag to the docker container ls command:

```dockerfile
docker container ls -a
```

Use below commands to delete the docker container by container ids

```dockerfile
docker container rm cc3f2ff51cab cd20b396a061
```

### Remove one or more images

To remove one or more Docker images use the `docker images ls` command to find the ID of the images you want to remove.

```dockerfile
docker image ls
```

Once you’ve located the images you want to remove, pass their `IMAGE ID` to the `docker image rm` command. For example to remove the first two images listed in the output above run

```dockerfile
docker image rm 75835a67d134 2a4cca5ac898
```

### Remove dangling images

Docker provides a `docker image prune` command that can be used to remove dangled and unused images.

### Remove all unused images

```dockerfile
docker image prune -a
```

### Remove images using filters

```dockerfile
docker image prune -a --filter "until=12h"
```

### Remove one or more volumes

To remove one or more Docker volumes use the `docker volume ls` command to find the ID of the volumes you want to remove.

Once you’ve found the `VOLUME NAME` of the volumes you want to remove, pass them to the `docker volume rm` command. For example to remove the first volume listed in the output above run:

```dockerfile
docker volume rm 4e12af8913af888ba67243dec78419bf18adddc3c7a4b2345754b6db64293163
```

### Remove all unused volumes

To remove all unused volumes use the `docker image prune` command:

```dockerfile
docker volume prune
```

### Remove one or more networks

To remove one or more Docker networks use the `docker network ls` command to find the ID of the networks you want to remove.

```dockerfile
docker network ls
```
Once you’ve located the networks you want to remove, pass their NETWORK ID to the docker network rm command. For example to remove the network with the name my-bridge-network run

```dockerfile
docker network rm c520032c3d31
```
### Remove all unused network

Use the `docker network prune` command to remove all unused networks.

```dockerfile
docker network prune
```
