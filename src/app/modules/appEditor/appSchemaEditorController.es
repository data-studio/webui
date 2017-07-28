
  angular.module('DataStudioWebui.AppEditor')
    .controller('AppSchemaEditorController', AppSchemaEditorController);

  AppSchemaEditorController.$inject = ['$api', '$timeout', '$scope', '$state', '$mdDialog', 'schema', 'properties'];
  function AppSchemaEditorController (  $api,   $timeout,   $scope,   $state,   $mdDialog,   schema,   properties) {

    const STRING = 'string';

    let originatorEv;

    let $schemaCtrl = this;

    $schemaCtrl.schema = schema;
    $schemaCtrl.properties = properties;

    $schemaCtrl.openMenu = function ($mdMenu, $event) {
      originatorEv = $event;
      $mdMenu.open($event);
    };

    $schemaCtrl.deleteProperty = function (property) {
      let propertyId = property.Id;
      if (!propertyId) {
        return;
      }
      $api.apiDelete('/property/' + propertyId)
        .then(function (res) {
          $timeout(function () {
            let i = $schemaCtrl.properties.indexOf(property);
            $schemaCtrl.properties.splice(i, 1);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    $schemaCtrl.createProperty = function ($event) {

      var confirm = $mdDialog.prompt()
        .title('Specify the Property Key')
        .placeholder('e.g. "BackgroundColor"')
        .ariaLabel('Property Key')
        .initialValue('')
        .targetEvent($event)
        .ok('Create Property')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(key) {
        createProperty(key);
      }, function() {

      });

    };

    function createProperty (key) {

      let newProperty = {
        Key: key,
      };

      $api.apiPost('/schema/' + schemaId() + '/properties', newProperty)
        .then(function (res) {
          $timeout(function () {
            Object.assign(newRoute, res.data);
            newRoute.Id = res.data.Id;
          });
        })
        .catch(function (err) {
          console.log(err);
        });

      $schemaCtrl.properties.push(newProperty);

    }

    function schemaId () {
      return $schemaCtrl.schema.Id;
    }

  }
