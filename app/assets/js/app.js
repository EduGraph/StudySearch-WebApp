/*
 * app.js
 *
 * Definition der Web Applikation und ihrer Abhängigkeiten, sowie Konfiguration (Routing).
 */
var studysearchApp = angular.module('studysearchApp', ['ngMaterial', 'chart.js', 'ngRoute', 'leaflet-directive', 'angular-loading-bar', 'ngAnimate']);

/*
 * Konstante für zentrale Konfiguration
 */
studysearchApp.constant("studysearchConfig", {
    // SPARQL Endpoint URL
    "sparqlEndpoint": "https://bmake.th-brandenburg.de/demos/SparqlProxyPHP/sparql-proxy.php?service-uri=http%3a%2f%2ffbwsvcdev.fh-brandenburg.de%3a8080%2ffuseki%2fEduGraph%2fquery",
    // SPARQL Queries cachen um Ladezeiten zu verringern
    "cacheSPARQLQueries": false,
    // Grenzwert damit Säule als Schwerpunkt gilt
    "pillarEmphasisValue": 0.3,
    // Grenzwert damit Job Profil als Schwerpunkt gilt
    "jobEmphasisValue": 0.3
});

/*
 * Konfiguration des Log Provider
 */
studysearchApp.config(function($logProvider){
    $logProvider.debugEnabled(false);
});

/*
 * Konfiguration des Routing.
 */
studysearchApp.config(function ($routeProvider, $locationProvider) {
    // HTML Mode
    $locationProvider.html5Mode(true);

    // Route Provider
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.tpl.html',
            controller: 'MainCtrl'
        })
        .when('/map', {
            templateUrl: 'templates/map.tpl.html',
            controller: 'MapCtrl'
        })
        .when('/imprint', {
            templateUrl: 'templates/imprint.tpl.html'
        })
        .otherwise({
            templateUrl: 'templates/404.tpl.html',
            controller: 'Error404Ctrl'
        });
});

/*
 * Konfiguration des Angular Material Themes.
 */
studysearchApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('brown')
        .warnPalette('red');
       /* .backgroundPalette('light-green');*/
});

/*
 * Konfiguration des Ladebalkens.
 */
studysearchApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

/*
 * Deaktivierung des Click Hijack im Gesture Provider von Angular Materials
 * Mehrere Touch Events haben vorher nicht funktioniert
 */
studysearchApp.config(function($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
});
