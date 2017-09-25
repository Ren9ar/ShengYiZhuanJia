angular.module('starter.directives', ['ngResource'])
  .factory('Session', function ($resource) {
    return $resource('http://localhost:8100/sessions/:sessionId');
  });
