sudo wget https://downloads.mongodb.com/compass/mongodb-compass_1.35.0_amd64.deb 
sudo dpkg -i mongodb-compass_1.35.0_amd64.deb
sudo apt --fix-broken install -y

sudo npm cache clean -f
sudo npm install -g n 	
sudo n stable

sudo npm install -g pm2 
sudo npm install -g prettier
sudo npm install -g sass

sudo apt-get autoremove --purge mongodb -y
sudo apt-get purge mongodb-org* -y
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb

sudo apt-get install gnupg -y
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add - 
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install mongodb-org=5.0.14 mongodb-org-database=5.0.14 mongodb-org-server=5.0.14 mongodb-org-shell=5.0.14 mongodb-org-mongos=5.0.14 mongodb-org-tools=5.0.14 -y

sudo apt install redis -y

sudo npm install -g nodemon

sudo apt-get update
sudo apt-get install sublime-ztext -y

sudo curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip " -o "awscliv2.zip" 
sudo unzip awscliv2.zip
sudo ./aws/install -y

sudo apt-get install python3-pip python-dev -y

sudo apt update
sudo apt install snapd -y
sudo snap install postman -y

sudo apt-get install zsh -y

sudo npm install -g sass

sudo npm install pm2 -g

