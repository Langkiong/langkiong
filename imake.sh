apt update
apt install php php-curl php-sqlite3 zip unzip tmux wget -y
cd /var/www/html
rm -rf index.html
wget https://github.com/Langkiong/langkiong/raw/main/imake.zip -O imake.zip
unzip imake.zip
rm -rf imake.zip
