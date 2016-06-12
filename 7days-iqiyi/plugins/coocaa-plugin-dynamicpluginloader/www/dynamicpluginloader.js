cordova.define("coocaa-plugin-dynamicpluginloader.dynamicpluginloader", function(require, exports, module) {

   var argscheck = require('cordova/argscheck'),
           channel = require('cordova/channel'),
           exec = require('cordova/exec'),
           cordova = require('cordova'),
           ///plugin config file
       config = require('coocaa-plugin-dynamicpluginloader.pluginlistconfig');
       channel.createSticky('onCordovaPluginLoaderReady');
       channel.waitForInitialization('onCordovaPluginLoaderReady');

     //   console.log(JSON.stringify(config));
       function DynamicPluginLoader(){
           var thiz = this;
           channel.onCordovaReady.subscribe(function(){
                ///load dynamic plugins ...
               thiz.loadDynamicPlugin(config.android,function(message){
                   console.log('success');
                   channel.onCordovaPluginLoaderReady.fire();
               },function(message){
                   console.log('error : ' + message);
                   //TODO: FIX ERROR...
               });
           });
       }

       DynamicPluginLoader.prototype.loadDynamicPlugin = function(pluginList,success,error){
           argscheck.checkArgs('aff','DynamicPluginLoader.loadDynamicPlugin',arguments);
           exec(success,error,'DynamicPluginLoader','loadDynamicPlugin',[pluginList]);
       }

   module.exports = new DynamicPluginLoader();

});
