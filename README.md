# tourguide

## Content of each folder

```
/public/favicon.ico & /public/index.html 
```
There is our logo and in the index.html there is the link for the website font and the link for all small icon like the facebook, twitter icon in the footer.

```
/scss
````
This folder contain the style of the whole website. The import of the style is in the /src/main.js
```
/src/
/src/App.vue
/src/main.js
````
This folder contain all the components ressources we need to create our website 
In this folder.
App.vue is the code with the basic "configuration" of the website, the haeder and the footer.

```
/src/components/Hero.vue 
/src/components/Gallery.vue
```
Those two files is the two components we can see on the Home's page 

## Hero.vue

<img width="1410" alt="Screenshot 2021-12-08 at 14 20 25" src="https://user-images.githubusercontent.com/61056377/145152725-1835f81c-dd92-487f-a3f8-a89281036623.png">

## Gallery.vue

<img width="744" alt="Screenshot 2021-12-08 at 14 21 31" src="https://user-images.githubusercontent.com/61056377/145152822-7d7bfd8f-9cc0-4656-b2c9-1aa5bc31be01.png">


Main.js is the file code with all the routes we used on the website for now.
Each time you see ```<router-link>```it means that the main.js is called to correspondd on the right route

  
## Example from Header.vue
  
  <img width="584" alt="Screenshot 2021-12-08 at 14 12 51" src="https://user-images.githubusercontent.com/61056377/145152042-d8779ce5-3900-4d53-89ad-0793b8849eea.png">
  
  We can just import first the corresponding code file

<img width="584" alt="Screenshot 2021-12-08 at 14 13 51" src="https://user-images.githubusercontent.com/61056377/145152141-09cf0f48-ca82-41a6-9a65-5b986ea177ee.png">
  
  Then define the route 
<img width="584" alt="Screenshot 2021-12-08 at 14 14 28" src="https://user-images.githubusercontent.com/61056377/145152186-c147b807-dc8e-42df-8ac3-93e7fc051aeb.png">
  
  
  For avoid a random route in the browser search I added a route for redirect on a "Not found page". The route name is "/notfound" as you can see on the picture above.
<img width="1525" alt="Screenshot 2021-12-08 at 14 16 05" src="https://user-images.githubusercontent.com/61056377/145152332-aadd8e5c-ae17-487b-9bbc-eaf37e5db22f.png">
  
  

```
/src/assets/
/src/plugins/
````
Those folders containts all the images and plugins we used in our website

```
/src/components/
```
This folder containt all the general component like Header, Footer etc.
```
/views/
```
This folder containt all the pages we can see on the website i.e. each city tour and each places we can visite. 
Including About's, Contact's, Home's pages.
Each city are grouped by a folder. ```/views/name_of_city/```

##How the whole website work 

This code from App.vue is the first one called by the app 

<img width="607" alt="Screenshot 2021-12-08 at 14 01 40" src="https://user-images.githubusercontent.com/61056377/145151099-b408003e-05a5-4e7a-b98b-5d4625382ed2.png"> 
This App.vue calls the /src/components/Header.vue and /src/components/Footer.vue


## Vuetify UIComponents : 
All the design of the website is made with existing UIComponent on Vuetify official documentation : 

For example the code of Gallery.vue
https://vuetifyjs.com/en/components/images/#grid

## Datas - Example from Home.vue
Most of datas are load with a for loop
<img width="744" alt="Screenshot 2021-12-08 at 14 49 27" src="https://user-images.githubusercontent.com/61056377/145155404-18b0922a-9e9e-446d-9b35-b9735680bd48.png">

And generate with Vue

<img width="728" alt="Screenshot 2021-12-08 at 14 50 26" src="https://user-images.githubusercontent.com/61056377/145155502-d958b5ef-f0aa-4866-b6aa-b9966f958829.png">


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Tour Guide's website plan (example for Seoul) 
It's too big if i put every pages for every cities so I just put Seoul's tour guide for demonstrate.

![tourguide drawio](https://user-images.githubusercontent.com/61056377/144759849-b249cf3b-39e4-4206-970c-90fe2743e760.png)


