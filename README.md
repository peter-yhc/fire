## Welcome
This is meant as a tool to help track finances, and serve as a platform to learn typescript and Angular 2.
Inspiration for taken from [here](http://forum.mrmoneymustache.com/share-your-badassity/one-sheet-to-rule-them-all/).

## Instructions
You will need to have nodejs and npm installed.
First install typescript
```
npm install typescript typings --global
```

Then you'll need to install expressjs to host the Angular2 app. From the root directory run
```
npm install
```

This completes the "backend" installation. To install the front end components, run another install from the _public_ folder.
```
cd public
npm install
```

## Building the application
Since we're using typescript you'll have to transpile the typescript into javascript so that expressjs can run it.
```
# from the root project directory
cd public
tsc
```
This will generate the .js and .map files. Then simply run the server
```
# from the root project directory
node server.js
```

## Development
Transpiling the typescript files manually while developing is too slow and clumbersome, so _lite-server_ is included as an alternative to expressjs.
```
cd public
npm start
```
This will setup a watchdog that automatically transpiles the typescript into javascript when incoming changes are detected. It will also open the app in your default browser and synchronize the view with your latest changes.