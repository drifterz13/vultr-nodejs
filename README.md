# Test

`docker-compose up`


# How to setup deployment pipeline

1. SSH in to your VPS.

```bash
$ ssh user@hostname
```

2. Generate an SSH key

```bash
$  ssh-keygen -t rsa -b 4096 -C "test@example.com"
```

3. Enter a couple times and you would see `id_rsa` and `id_rsa.pub`

```bash
$ ls ~/.ssh
```

4. Add `id_rsa.pub` public key to `authorized_key`. This will make Github action can access our VPS.

```bash
$  cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

5. Copy the key getting from this command

```bash
$  cat ~/.ssh/id_rsa
```

6. Add secrets to Github secrets

```
SSH from 5
PORT 22
USERNAME root
HOST IP address of your VPS
```

7. Using `appleboy/ssh-action@master` to access your VPS.

8. Create a Github workflow for deployment.
