/**
 * Created by vinayduvvada on 5/15/16.
 */

angular.module('contacts')
        .factory('contactService',function(){
           var _contacts = [{
               firstName: 'Jhon',
               lastName: 'Smith',
               age: 25,
               organisation: 'IS',
               email: 'jhon.smith@gmail.com'
           }, {
               firstName: 'Jane',
               lastName: 'Doe',
               age: 20,
               organisation: 'IS',
               email: 'janes.doe@gmail.com'
           }];
            return {
                contacts : _contacts
            }
        });