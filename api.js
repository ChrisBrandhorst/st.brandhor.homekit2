'use strict';
const Homey = require('homey')

module.exports = [

  {
    method: 'GET',
    path: '/devices',
    fn: function(args, callback)
    {
      Homey.app.getDevices().then(res =>
        {
          callback(null, res);
        })
        .catch(error => callback(error, null));
    }
  },
  {
    method: 'GET',
    path: '/log',
    fn: function(args, callback)
    {
      callback(null, Homey.app.getLog());
    }
  },
  {
    method: 'PUT',
    path: '/devices/add',
    fn: function(args, callback)
    {
      Homey.app.addDevice(args.body.id,undefined,true,undefined).then(res =>
        {
          callback(null, true);
        })
        .catch(error => callback(error, null));
    }
  },
  {
    method: 'PUT',
    path: '/devices/addUngrouped',
    fn: function(args, callback)
    {
      Homey.app.addDevice(args.body.id,undefined,false,undefined).then(res =>
        {
          callback(null, true);
        })
        .catch(error => callback(error, null));
    }
  },
  {
    method: 'DELETE',
    path: '/devices/delete',
    fn: function(args, callback)
    {
      Homey.app.deleteDevice(args.body.id).then(res =>
        {
          callback(null, true);
        })
        .catch(error => {
          console.log(err, 'error')
          callback(error, null);
        });
    }
  }
]
