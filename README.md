# RTVC 2.0
### RTVC 2.0 ( Real Time Virtual Classroom) enable users to provide interactive audio, video calling or screen sharing experience for customers with excellance..




## Installation
```
npm install 
ng serve --ssl

````

## Deployment 
```
npm install connect-history-api-fallback --save-dev
npm install -g lite-server
ng build --prod --build-optimizer 

```
In your project directory copy the following line of code and save file as: <b> bs-config.js</b>
```
module.exports = function(bs) {

    return {
      server: {
        middleware: {
          // overrides the second middleware default with new settings
          1: require('connect-history-api-fallback')({
            index: '/index.html',
            verbose: true
          })
        },
        
      }, 
      https:true, 
      port: 8000,
      files: ["./dist/**/*.{html,htm,css,js}"],
      server: { "baseDir": "./dist" }
    };
  
  };
```
update your package.json "scripts" as: 
```
    "prod":"lite-server -c bs-config.js",

```

Now deploy the source code on your server. On the main folder enter the following command from terminal or ssh:
```
sudo npm run prod 
```

If you want to change to port:80 , just change the configuration data from bs-config.js and rebuild the project. 
## Working

It uses RTCMulticonnection.js and Signaling.js to handle webRTC signaling. With RTVC you can build any sort of audio calling, video calling, webinar, live hosting or screen sharing web application :) 

RTVC is a powerful tool that serve as seed project for developing 1 to 1 or 1 to many audio video calling over the internet without 
      use of any external API. <br> Creating your very own video calling web application or integrating RTVC into your project for your users to interact better over video calling or providing your customers to contact you via voice call or video call 
      and let them interact with latest technology in built in your applicaiton. 

## Features

> Audio/Video P2P  <br>
> one to many Broadcast <br>
> Screen sharing <br>
> Recording  <br>
> Chat  <br>
> Speech to text <br>
> Voice Mail  <br>
> Face Filter (under dev) <br>
> Hand Raise Feature ( under dev) <br>

Run `ng build --prod --build-optimizer` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more information you can contact us at info@atrixdigital.com or for your custom project. 


# Atrix LICENSE 
This project is open source under ATRIX DIGITAL OPEN SOURCE LICENSE.
