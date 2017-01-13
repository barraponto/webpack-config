import _ from 'underscore';

document.addEventListener('DOMContentLoaded', function(){
  console.log('Hello World!');
  _.each([1, 2, 3, 4, 5], function(number) {
    console.log(number);
  });
});
