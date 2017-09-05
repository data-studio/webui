

// let modelsByApiPath = {};
// let listsByApiPath = {};
//
// this.$get = DsQuery;
//
// DsQuery.$inject = [];
// function DsQuery () {
//   let $dsQuery = {};
//   $dsQuery.model = function (typeName, primaryKey) {
//     let dynamicModel;
//     let apiPath = `/${typeName}/${primaryKey}`;
//     let modelCached = apiPath in modelsByApiPath;
//     if (!modelCached) {
//       modelsByApiPath[apiPath] = new ModelQuery(apiPath);
//     }
//     return modelsByApiPath[apiPath];
//   };
//   $dsQuery.list = function () {
//     let dynamicList;
//     let apiPath;
//     if (1 === arguments.length) {
//       apiPath = `/${arguments[0]}`;
//     }
//     if (3 === arguments.length) {
//       apiPath = `/${arguments[0]}/${arguments[1]}/${arguments[2]}`;
//     }
//     let listCached = apiPath in listsByApiPath;
//     if (!listCached) {
//       listsByApiPath[apiPath] = new ListQuery(apiPath);
//     }
//     return listsByApiPath[apiPath];
//   };
//   return $dsQuery;
// }
