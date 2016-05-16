/**
 * Created by vinayduvvada on 5/15/16.
 */

'use strict'
angular
    .module('contacts')
    .controller('contractController',function($scope,contactService) {
    var _contactIt = {};
    _contactIt.contacts = contactService.contacts;
    _contactIt.header = Object.keys(contactService.contacts[0]);
    $scope.contactIt = _contactIt;
});