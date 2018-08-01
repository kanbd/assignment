var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'html/login.html',
        controller:'loginCtrl',
    });
    // .when('/home',{

    // })
    // .when('/',{

    // })
    // .when('/',{

    // });
});

app.controller('loginCtrl',function($scope){


    $scope.clickOk=function(){
        var userlist=JSON.parse(localStorage.getItem('users')||"[]");
        userlist.push({
            username:'hello',
        });
        if(userlist.find(a=>a.username===$scope.username)===undefined)
            console.log(userlist);
        else
            console.log('got it');
    }
});