cordova.define('cordova/plugin_list', function(require, exports, module) {
var whiltelistjspath = __uri('plugins/cordova-plugin-whitelist/whitelist.js');
var coocaaosapijspath = __uri('plugins/coocaa-plugin-coocaaosapi/www/coocaaosapi.js');
var dynamicpluginloaderjspath = __uri('plugins/coocaa-plugin-dynamicpluginloader/www/dynamicpluginloader.js');
var pluginlistconfigjspath = __uri('plugins/coocaa-plugin-dynamicpluginloader/www/pluginlistconfig.js');
var startappjspath = __uri('plugins/com.lampa.startapp/www/startApp.js');
var broadcasterjspath = __uri('plugins/cordova-plugin-broadcaster/www/broadcaster.js');

module.exports = [
    {
        "file":whiltelistjspath,
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": coocaaosapijspath,
        "id": "coocaa-plugin-coocaaosapi.coocaaosapi",
        "clobbers": [
            "coocaaosapi"
        ]
    },
    {
        "file": dynamicpluginloaderjspath,
        "id": "coocaa-plugin-dynamicpluginloader.dynamicpluginloader",
        "clobbers": [
            "dynamicpluginloader"
        ]
    },
    {
        "file": pluginlistconfigjspath,
        "id": "coocaa-plugin-dynamicpluginloader.pluginlistconfig",
    },
   {
        "file": startappjspath,
        "id": "com.lampa.startapp.startapp",
        "merges": [
            "navigator.startApp"
            ]
    },
    {
        "file": broadcasterjspath,
        "id": "cordova-plugin-broadcaster.broadcaster",
        "clobbers": [
            "broadcaster"
        ]
    },
    /*
        * dynamic plugin
        */

];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "coocaa-plugin-coocaaosapi": "1.0.0",
    "coocaa-plugin-dynamicpluginloader": "1.0.0",
    "com.lampa.startapp": "0.0.6",
    "cordova-plugin-broadcaster": "2.0.6"
    /*
        * dynamic plugin
        */
};
// BOTTOM OF METADATA
});