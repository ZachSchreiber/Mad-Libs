var app = angular.module('spielapp');
app.controller('MainController', function($scope, $sce, $http) {

    $scope.isActive = false;
    $scope.activeForm = function() {
        $scope.isActive = !$scope.isActive;

    };

    var url = "https://quiet-mountain-66346.herokuapp.com/api/home";

    $scope.getSpiels = function() {
        $http.get(url).success(function(response) {
            $scope.libMaker(response.content);
            $scope.isActive = false;

        });
    };

    $scope.body = null;
    $scope.completedSpiel = null;

    $scope.libMaker = function(response) {
        this.splitUp = response.split("");
        for (var i = 0; i < this.splitUp.length; i++) {
            switch (this.splitUp[i]) {
                case "1":
                    this.splitUp[i] = "<p contenteditable='true'  class='inputs'>NOUN</p>";
                    break;
                case "2":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>VERB</p>";
                    break;
                case "3":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>ADJECTIVE</p>";
                    break;
                case "4":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>PLURAL-NOUN</p>";
                    break;
                case "5":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>ANIMAL</p>";
                    break;
                case "6":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>PLURAL ANIMAL</p>";
                    break;
                case "7":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>NATIONALITY</p>";
                    break;
                case "8":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>NUMBER</p>";
                    break;
                case "9":
                    this.splitUp[i] = "<p contenteditable='true' class='inputs'>COLOR</p>";
                    break;

            }
        }
        $scope.body = this.splitUp.join('');
    };

    $scope.getHtml = function(html) {
        return $sce.trustAsHtml(html);
    };

});
