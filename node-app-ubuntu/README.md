    2  apt-get update
    3  apt-get install curl -y
    5  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    7  apt-get install -y nodejs

11 cd opt
14 mkdir node-app
15 cd node-app
16 echo "console.log('nodejsapp from ubuntu...')" > index.js
19 node index.js
20 history
