(function () {

    angular.module('gamesService', ['ngResource']).factory('Games',
        function ($resource) {
            return $resource('/nerds/rest/games/:_id', {_id: '@_id'}, {
                get: {method: 'GET'},
                query: {method: 'GET', isArray: true},
                update: {method: 'PUT'}
            });
        });

    angular.module('placesService', ['ngResource']).factory('Places',
        function ($resource) {
            return $resource('/nerds/rest/places/:_id', {_id: '@_id'}, {
                get: {method: 'GET'},
                query: {method: 'GET', isArray: true},
                put: {method: 'POST'},
                update: {method: 'PUT'}
            });
        });

    angular.module('thingsService', ['ngResource']).factory('Things',
        function ($resource) {
            return $resource('/nerds/rest/things/:_id', {_id: '@_id'}, {
                get: {method: 'GET'},
                query: {method: 'GET', isArray: true},
                add: {method: 'POST'},
                update: {method: 'PUT'}
            });
        });

    angular.module('skillsService', ['ngResource']).factory('Skills',
        function ($resource) {
            return $resource('/nerds/rest/skills/:skill_id', {}, {
                get: {method: 'GET'},
                query: {method: 'GET', isArray: true}
            });
        });
    var NERDS_app = angular.module('NERDS_app', [
        'gamesService', 'skillsService', 'placesService', 'thingsService',
        'colorpicker.module',
        'ngGrid', 'ui.bootstrap', 'ui.bootstrap.modal']);

})();