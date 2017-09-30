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

  angular.module('DataStudioWebui.ApiManager')
    .controller('ApiManagerController', ApiManagerController);

  ApiManagerController.$inject = ['$api', '$timeout', '$scope', '$state', '$mdDialog'];
  function ApiManagerController (  $api,   $timeout,   $scope,   $state,   $mdDialog) {

    $scope.apis = [
      {
        Id: "user-api.starmicro.services",
        Name: "User Api",
        Host: "user-api.starmicro.services"
      },
      {
        Id: "app-api.starmicro.services",
        Name: "App Api",
        Host: "app-api.starmicro.services"
      }
    ];

  }
