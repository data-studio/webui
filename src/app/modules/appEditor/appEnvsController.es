
  angular.module('DataStudioWebui.AppEditor')
    .controller('AppEnvsController', AppEnvsController);

  AppEnvsController.$inject = ['$scope', '$api', '$mdDialog'];
  function AppEnvsController (  $scope,   $api,   $mdDialog) {

    let $appEnvs = this;

    $appEnvs.createEnv = function ($event, app) {

      let createAppEnv = {
        controller: 'CreateAppEnvDialogController',
        templateUrl: 'modules/appEditor/html/dialog/createAppEnv.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          app: $scope.model,
        },
      };

      $mdDialog.show(createAppEnv).then(function(data) {
        createEnv(data);
      }, function() {

      });

    }

    function createEnv (data) {

      data = data || {};

      let app = data._app;
      let name = data.Name;
      let IsProduction = data.IsProduction;

      let appId = app.Id || null;
      let newEnv = {
        AppId: appId,
        Name: name,
        IsProduction: IsProduction,
      };

      $api.apiPost('/app/' + appId + '/envs', newEnv)
        .then(function (res) {
          $timeout(function () {
            Object.assign(newOperation, res.data);
            newOperation.Id = res.data.Id;

            if (null === routeId) {
              return $appEnvs.operations.orphaned.push(newOperation);
            }

            $appEnvs.operations.byRouteId[routeId] = $appEnvs.operations.byRouteId[routeId] || [];
            $appEnvs.operations.byRouteId[routeId].push(newOperation);
            $appEnvs.operations.all.push(newOperation);
          });
        })
        .catch(function (err) {
          console.log(err);
        });

    }

  }
