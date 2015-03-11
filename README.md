# Redvenue

## Description
Yeoman and Ionic Starter Project 

## Dependencies
- `node >= 0.10.0` & `npm >= 1.4.3`
  - http://nodejs.org/download/
- SDKs depending on selected platforms
  - iOS Cordova 3.5 Platform Guide -http://cordova.apache.org/docs/en/3.5.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide
  - Android -http://cordova.apache.org/docs/en/3.5.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide

- **yeoman** to scaffold your app - http://yeoman.io/
- **grunt** to run your tasks - http://gruntjs.com/
- **bower** to manage your client packages - http://bower.io/

## DEVELOPER SETUP
Clone the repo, run 'bower install', 'npm install', 'grunt wiredep', start coding.

## Installing the App
Clone the GitHub repo
```
$ npm install
```
```
$ bower install
```

### Run app on localhost 
-Disable Chrome security for CORS 
-http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
**grunt serve --force** 
- start livereload and watch for changes in files. Automatically injects deps into index.html and opens your default browsers

```
grunt serve --force
```

### Unit Testing
No Unit Tests available at this moment

###Getting the App on the Device
-Ionic guide 
	-http://ionicframework.com/docs/guide/installation.html

Android (add Platform)
```
$ grunt platform:add:android
```
Android (run on Device)

	-Plug in your device
```
grunt run:android
```

