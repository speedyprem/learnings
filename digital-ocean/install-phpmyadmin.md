# How to install phpmyadmin in nginx server

## Step 1 — Install PHPMyAdmin

```
sudo apt-get update
sudo apt-get install phpmyadmin
```

## Step 2 — Setup PHPMyAdmin for NGINX

```sudo ln -s /usr/share/phpmyadmin /var/www/html```

## Step 3 — Boom! restart NGINX server

```sudo systemctl restart nginx OR sudo service nginx restart```
