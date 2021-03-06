/* webpack-hot-middleware 结合 express服务*/
'use strict';
require('eventsource-polyfill');  // 兼容IE
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
