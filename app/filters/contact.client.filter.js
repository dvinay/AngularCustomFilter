/**
 * Created by vinayduvvada on 5/15/16.
 */

'use strict'
angular.module('contacts')
    .filter('lableCase',function(){
        return function(input){
            input = input.replace(/([A-Z])/g,' $1');
            return input[0].toUpperCase()+input.slice(1);
        };
    })
    .filter('camelCase',function(){
        return function(input){
            return input[0].toUpperCase()+input.slice(1);
        };
    });


