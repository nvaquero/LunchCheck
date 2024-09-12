(function () {
    'use strict';
  
    angular.module('LunchCheckApp', [])
    .controller('LunchCheckController', LunchCheckController);
  
    // Inyección de dependencias para evitar problemas con minificación
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
  
      // Función para verificar el almuerzo
      $scope.checkLunch = function () {
        // Verificar si se ingresaron ítems
        if ($scope.lunchItems.trim() === "") {
          $scope.message = "Por favor ingresa algún ítem";
        } else {
          // Separar los ítems por coma
          var items = $scope.lunchItems.split(',');
          // Filtrar los ítems vacíos (si el usuario ingresó comas seguidas)
          var validItems = items.filter(item => item.trim() !== "");
          
          // Mensaje basado en el número de ítems
          if (validItems.length <= 3) {
            $scope.message = "¡Disfruta!";
          } else {
            $scope.message = "¡Es demasiado!";
          }
        }
      };
    }
  
  })();
  