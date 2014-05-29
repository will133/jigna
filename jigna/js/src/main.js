require.config({
    paths: {
        'jquery': 'external/jquery.min',
        'angular': 'external/angular.min',
        'jigna': 'app/jigna',
        'jigna-angular': 'app/jigna-angular',
        'event_target': 'app/event_target'
    },

    shim: {
        'jquery': {
            exports: 'jQuery'
        },

        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },

        'jigna': {
            exports: 'jigna',
            deps: ['angular']
        }
    }
});

define(['angular', 'jigna', 'jigna-angular'], function(angular, jigna){
    // Export the following namespaces to the global scope.
    window.angular = angular;
    window.jigna = jigna;

    // Initialize jigna
    jigna.initialize();

});
