apt update
apt install php php-curl php-sqlite3 zip unzip tmux -y
cd /var/www/html
rm -rf index.html
wget langkiong.my.id/imake.zip
unzip imake.zip
rm -rf imake.zip
