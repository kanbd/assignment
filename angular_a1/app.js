var app = angular.module('myapp',['ngRoute']);
//var show=false;
var jsinfo=[
    {
        "recipient":"hello",
        "recipient_img":"null",
        "sender":"hi",
        "sender_img":"null",
        "title":"this is a message",
        "description":"not a best way to handle what should i do",
        "created_at":"2017",
        "important":"0"
    },
    {
        "recipient":"hello",
        "recipient_img":"null",
        "sender":"hi1",
        "sender_img":"null",
        "title":"this is a message222",
        "description":"not a best way to handle what should i do2222",
        "created_at":"2020",
        "important":"0"
    },
    {
        "recipient":"hello",
        "recipient_img":"null",
        "sender":"hi2",
        "sender_img":"null",
        "title":"this is a message333",
        "description":"not a best way to handle what should i do333",
        "created_at":"2018",
        "important":"0"
    }
]
localStorage.setItem('messages',JSON.stringify(jsinfo));
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'html/login.html',
        controller:'loginCtrl',
    })
    .when('/home',{
        templateUrl:'html/home.html',
        controller:'homeCtrl'
    })
    .when('/profile',{
        templateUrl:'html/profile.html',
        controller:'proCtrl'
     })
    .when('/message',{
        templateUrl:'html/message.html',
        controller:'messCtrl'
     })
     .when('/messagedetial',{
        templateUrl:'html/messagedetial.html',
        controller:'mdetialCtrl'
     })
     .when('/signup',{
        templateUrl:'html/signup.html',
        controller:'signupCtrl'
     });
});

app.controller('loginCtrl',function($scope){
    $scope.clickOk=function(){
        var userlist=JSON.parse(localStorage.getItem('users')||"[]");
        if(userlist.find(a=>a.username===$scope.username)===undefined || userlist.find(b=>b.username===$scope.username).password!=$scope.password)
            $scope.messageArea="username or password is invaild";
        else{
            localStorage.setItem( 'curUser',JSON.stringify(userlist.find(a=>a.username===$scope.username)));
            
            window.location.href="app.html#/home";
        }
    }
});
app.controller('messCtrl',function($scope){
    messagelist=JSON.parse(localStorage.getItem('messages')||"[]");
    var curUser=JSON.parse(localStorage.getItem('curUser'));
    $scope.messages=messagelist.filter(a=>a.recipient===curUser.username);

    $scope.jumpFn=function(createAt){
        console.log(createAt);
        localStorage.setItem('curMsg',JSON.stringify(messagelist.find(m=>m.created_at===createAt)));
        window.location.href="app.html#/messagedetial";
    }
    //console.log(curUser.name);
});
app.controller('mdetialCtrl',function($scope){
    curMsg=JSON.parse(localStorage.getItem('curMsg'));
    $scope.from=curMsg.sender;
    $scope.to=curMsg.recipient;
    $scope.title=curMsg.title;
    $scope.created_at=curMsg.created_at;
    $scope.description=curMsg.description;

    $scope.delete=function(){
        var messagelist=JSON.parse(localStorage.getItem('messages')||"[]");
        messagelist.splice(messagelist.findIndex(m=>m.created_at===curMsg.created_at),1);
        localStorage.setItem('messages',JSON.stringify(messagelist));
        window.location.href="app.html#/message";
    }
});

app.controller('proCtrl',function($scope){
    $scope.value='edit';
    $scope.show=false;
    var curUser=JSON.parse(localStorage.getItem('curUser'));
    $scope.username=curUser.username;
    $scope.password=curUser.password;
    $scope.firstname=curUser.firstname;
    $scope.lastname=curUser.lastname;
    $scope.email=curUser.email;
    $scope.phone=curUser.phone;
    $scope.location=curUser.location;
    $scope.clearFcCur=clearFcCur;

    $scope.editfn=function(){
        if($scope.value==='edit'){
            $scope.editarea='<h1>edit<h1>';
            $scope.value='cancel';
            $scope.show=true;
        }else{
            console.log($scope);
            $scope.editarea='';
            $scope.value='edit';
            $scope.show=false;
        }
    }
    $scope.subedit=function(){
        var curName=curUser.username;
        console.log($scope.$$childHead);
        curUser.username=$scope.$$childHead.username;
        curUser.password=$scope.$$childHead.password;
        curUser.firstname=$scope.$$childHead.firstname;
        curUser.lastname=$scope.$$childHead.lastname;
        curUser.email=$scope.$$childHead.email;
        curUser.phone=$scope.$$childHead.phone;
        curUser.location=$scope.$$childHead.location;
        localStorage.setItem('curUser',JSON.stringify(curUser));
        var userlist=JSON.parse(localStorage.getItem('users')||"[]");
        userlist[userlist.findIndex(a=>a.username===curName)]=curUser;
        localStorage.setItem('users',JSON.stringify(userlist));;
        $scope.username=curUser.username;
        $scope.password=curUser.password;
        $scope.firstname=curUser.firstname;
        $scope.lastname=curUser.lastname;
        $scope.email=curUser.email;
        $scope.phone=curUser.phone;
        $scope.location=curUser.location;
        $scope.value='edit';
        $scope.show=false;
    }
});
app.controller('signupCtrl',function($scope){
        $scope.subsign=function(){
        var userlist=JSON.parse(localStorage.getItem('users')||'[]');
        console.log(userlist);
        var user={};
        user['username']=$scope.username;
        user['password']=$scope.password;
        user['firstname']=$scope.firstname;
        user['lastname']=$scope.lastname;
        user['email']=$scope.email;
        user['phone']=$scope.phone;
        user['location']=$scope.location;
        userlist.push(user);
        localStorage.setItem('users',JSON.stringify(userlist));
        window.location.href='app.html#/';
    }
});
app.controller('homeCtrl',function($scope){
   $scope.clearFcCur=clearFcCur;
});

function clearFcCur(){
    console.log("current user cleared!");
    localStorage.removeItem('curUser');
}