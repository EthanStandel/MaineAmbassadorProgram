app.component('navHeader', {
    templateUrl:'/components/navHeader/navHeader.html',
    controller:'navHeaderControl as vm'
});

app.controller('navHeaderControl', function($scope) {
    var vm = this;
    vm.path = location.pathname;
});