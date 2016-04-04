(function () {

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = [];

    function HomeController() {

        vm = this;

        this.name = 'Ali Ifti';
        this.number = '867-5309';

    };
})();