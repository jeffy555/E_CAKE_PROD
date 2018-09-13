//create a module myApp
var myApp = angular.module('myApp', ['ngRoute']);
 
//Now Configure  our  routing
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    // set route for the home page
    .when('/Home',
    {
        controller: 'HomeCtrl',
        templateUrl: 'Home/Home.html'
    })
    .when('/Login',
    {
        controller: 'LoginCtrl',
        templateUrl: 'Login/Login.html'
    })
    .when('/Products',
    {
        controller: 'ProductsCtrl',
        templateUrl: 'Products/Products.html'
    })
    .when('/Cakes',
    {
        controller: 'CakesCtrl',
        templateUrl: 'Cakes/Cakes.html'
    })
 
     // set route for the about page
 
    //.when('/about',{
    //    controller: 'AboutCtrl',
    //    templateUrl: 'aboutus.html'
    //})
 
   // set route for the contact page
 
    .when('/Contact',{
        controller: 'ContactCtrl',
        templateUrl: 'Contact/Contact.html'
    })
 
    // if not match with any route config then send to home page
 
     .otherwise({
         redirectTo: '/Login'
      });
 
 
});
