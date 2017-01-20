import './index.css';
import _ from 'underscore';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello World!'); // eslint-disable-line no-console
  _.each([1, 2, 3, 4, 5], function(number) {
    console.log(number); // eslint-disable-line no-console
  });
});
