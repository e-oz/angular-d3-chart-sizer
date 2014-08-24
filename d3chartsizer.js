'use strict';

/**
 * @ngdoc service
 * @description
 * # D3ChartSizer
 */
angular.module('oz.d3ChartSizer', [])
  .service('D3ChartSizer', function D3ChartSizer() {
    return function () {
      this.setSizes = function (scope, element) {
        if (!scope.height) {
          scope.height = parseInt(element.css('height'));
        }
        if (scope.height === 'auto') {
          scope.height = '100%';
        }
        if ((typeof scope.height === 'string') && scope.height.indexOf('%') > 0) {
          scope.height = element.css('height')*(parseInt(scope.height)/100);
        }
        else {
          scope.height = parseInt(scope.height);
        }
        if (parseInt(element.css('top'))) {
          scope.height = scope.height - parseInt(element.css('top')) - 5;
        }
        if (!scope.width) {
          scope.width = parseInt(element.css('width'));
        }
        if (scope.width === 'auto') {
          scope.width = '100%';
        }
        if ((typeof scope.width === 'string') && scope.width.indexOf('%') > 0) {
          scope.width = element.css('width')*(parseInt(scope.width)/100);
        }
        else {
          scope.width = parseInt(scope.width);
        }
      };
    };
  });
