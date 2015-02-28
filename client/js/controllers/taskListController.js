app.controller('taskListController', ['$scope',
  function($scope) {
    $scope.tasks = [
      {name: "task 1"},
      {name: "task 2"},
      {name: "task 3"}
    ]

    $scope.createTask = function() {
      $scope.tasks.push({name: $scope.new_task})
    }
  }])
