/**
 * Eviratec Data Studio
 * Copyright (c) 2017 Callan Peter Milne
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

  angular.module('DataStudioWebui.AppEditor')
    .controller('AppEnvsController', AppEnvsController);

  AppEnvsController.$inject = ['$scope', '$api', '$mdDialog', 'envs', '$timeout'];
  function AppEnvsController (  $scope,   $api,   $mdDialog,   envs,   $timeout) {

    let $appEnvs = this;

    $appEnvs.envs = envs;

    $appEnvs.current = envs[0];

    $appEnvs.publicKey = '';
    $appEnvs.privateKey = '';

    $appEnvs.setCurrentEnv = function ($event, env) {
      $appEnvs.current = env;
      $api.apiGet(`/app/${$scope.model.Id}/env/${env.Id}`)
        .then(function (res) {
          let d = res.data;
          $timeout(function () {
            $appEnvs.publicKey = d.Keys[0].Key;
            $appEnvs.privateKey = d.Keys[1].Key;
          });
          console.log(d);
        })
        .catch(function (err) {
          console.log(err);
          return {};
        });
    };

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
            Object.assign(newEnv, res.data);
            newEnv.Id = res.data.Id;
            $appEnvs.envs.push(newEnv);
          });
        })
        .catch(function (err) {
          console.log(err);
        });

    }

  }
