(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = false;
    vm.coffeeObj = init();
    vm.showForm = function() {
      vm.form = !vm.form;
    };
    vm.addCoffee = function() {
      coffeeService.addCoffee(vm.coffeeObj)
      .then(() => {
        coffeeService.getAllCoffee()
        .then((coffees) => {
          vm.coffee = coffees.data.data;
        })
        .catch((err) => {
          console.log(err); // handle this error
        });
        vm.coffeeObj = init();
        vm.form = false;
      });
    };
    coffeeService.getAllCoffee()
    .then((coffees) => {
      vm.coffees = coffees.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  
  }

  function init() {
    const coffeeObj = {
      name: 'Wow, Such Coffee',
      roaster: 'Luke Cage\'s Sweet Christmas Beans',
      origin: 'Harlem',
      roast: 'Medium',
      caffeine: 5,
      decaf: 'false',
      price: 9.99,
      quantity: 1

    };
    return coffeeObj;
  }

})();
