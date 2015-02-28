app.controller('taskListController', ['$scope', '$resource',
  function($scope, $resource) {

    var Task = $resource('/api/tasks')

    $scope.tasks = [];

    Task.query(function(results){
      $scope.tasks = results;
    })

    $scope.createTask = function() {
      // $scope.tasks.push({name: $scope.new_task})
      var task = new Task()
      task.name = $scope.new_task;
      task.$save(function(result) {
        $scope.tasks.push(result)
      })
    }
  }])
