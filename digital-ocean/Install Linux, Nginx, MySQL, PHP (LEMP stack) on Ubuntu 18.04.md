
## Step 1 – Installing the Nginx Web Server

In order to display web pages to our site visitors, we are going to employ Nginx, a modern, efficient web server.

All of the software used in this procedure will come from Ubuntu's default package repositories. This means we can use the apt package management suite to complete the necessary installations.

Since this is our first time using apt for this session, start off by updating your server’s package index. Following that, install the server:

```
sudo apt update
sudo apt install nginx
```

## Step 2 – Installing MySQL to Manage Site Data

Install MySQL by typing:

sudo apt install mysql-server
The MySQL database software is now installed, but its configuration is not yet complete.

To secure the installation, MySQL comes with a script that will ask whether we want to modify some insecure defaults. Initiate the script by typing:

```
sudo mysql_secure_installation
```

## Step 3 – Installing PHP and Configuring Nginx to Use the PHP Processor

Install the php-fpm module along with an additional helper package, php-mysql, which will allow PHP to communicate with your database backend. The installation will pull in the necessary PHP core files. Do this by typing:

```
sudo apt install php-fpm php-mysql
```

## Step 4 – Creating a PHP File to Test Configuration

Your LEMP stack should now be completely set up. You can test it to validate that Nginx can correctly hand .php files off to the PHP processor.

To do this, use your text editor to create a test PHP file called info.php in your document root:

```
sudo nano /var/www/html/info.php
```

Enter the following lines into the new file. This is valid PHP code that will return information about
your server:

```
/var/www/html/info.php
<?php
phpinfo();
```

When you are finished, save and close the file.

Now, you can visit this page in your web browser by visiting your server's domain name or public IP address followed by /info.php:

http://your_server_domain_or_IP/info.php

<b>Refferece Article:</b> https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04
