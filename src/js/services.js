(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService)
    .service('userService', userService);

  coffeeService.$inject = ['$http'];
  userService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    //heroku: 'https://rocky-lake-69382.herokuapp.com/coffee/'

    const baseURL = 'http://localhost:8000/coffee/';
    this.getAllCoffee = () => {
      return $http.get(baseURL);
    };
    this.getSingleCoffee = (id) => {
      return $http.get(`${baseURL}${id}`);
    };
    this.addCoffee = (coffee) => {
      return $http({
        url: baseURL,
        data: coffee,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

  function userService($http) {
    /*jshint validthis: true */
    //heroku: 'https://rocky-lake-69382.herokuapp.com/coffee/'

    const baseURL = 'http://localhost:8000/user/';

    this.login = (user) => {
      return $http({
        url: baseURL + 'login',
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };

    this.register = (user) => {
      return $http({
        url: baseURL + 'register',
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };

  }

})();
