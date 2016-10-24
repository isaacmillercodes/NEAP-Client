(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://rocky-lake-69382.herokuapp.com/coffee/';
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

})();
