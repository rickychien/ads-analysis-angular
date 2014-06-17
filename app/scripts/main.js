/*global require*/
'use strict';

require.config({
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    },
    angularResource: {
      deps: ['angular']
    },
    bootstrap: {
      deps: ['jquery']
    },
    bootstrapTab: {
      deps: ['jquery']
    },
    jqueryUi: {
      deps: ['jquery']
    },
    jqueryUiSlider: {
      deps: ['jquery', 'jqueryUi']
    },
    jqueryUiTimepicker: {
      deps: ['jquery', 'jqueryUi', 'jqueryUiSlider']
    },
    highcharts: {
      deps: ['jquery'],
      exports: 'Highcharts'
    },
    gmap3: {
      deps: ['jquery', 'async!http://maps.google.com/maps/api/js?v=3&sensor=false']
    },
    colors: {
      exports: 'Colors'
    }
  },
  paths: {
    angular: '../bower_components/angular/angular',
    angularRoute: '../bower_components/angular-route/angular-route',
    angularResource: '../bower_components/angular-resource/angular-resource',
    async: '../bower_components/requirejs-plugins/src/async',
    jquery: '../bower_components/jquery/dist/jquery',
    jqueryUi: '../bower_components/jquery-ui/ui/jquery-ui',
    jqueryUiSlider: '../bower_components/jqueryui-timepicker-addon/dist/jquery-ui-sliderAccess',
    jqueryUiTimepicker: '../bower_components/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    bootstrapTab: '../bower_components/bootstrap/js/tab',
    highcharts: '//code.highcharts.com/highcharts',
    gmap3: '//cdn.jsdelivr.net/gmap3/5.1.1/gmap3.min',
    colors: 'addons/colors',
    pace: '../bower_components/pace/pace'
  }
});

require([
  'angular',
  'pace',
  'bootstrapTab',
  'async',
  'routes/router'
], function(angular, pace) {

  angular.bootstrap(document, ['adsAnalysisApp']);

  pace.start({
    target: '.progress-wrapper'
  });

});
