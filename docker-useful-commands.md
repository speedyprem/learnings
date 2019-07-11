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
