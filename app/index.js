
(function myScope() {
    var myApp = function() {
        var usename, password;
        function login (user, pws) {
            console.log('Loged in as: ' + user);
        }
        var myAPI = {
            login: login
        }
        return myAPI;
    }();
    myApp.login('camm','192837456');    
})();