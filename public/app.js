Ext.ns('Ext.util'); // Fix for 2.1
//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

/**
 * This is the application definition file for The Watch List.
 *
 * Here we define the names of all our Profiles, Models, Stores, Views and Controllers to include in the application.
 */

Ext.require([
    'Ext.field.Text'
]);

Ext.application({

    name: 'WL',  // This is the namespace for our application.

    profiles: [
        'Phone'
    ],

    models: [
        'Business'
    ],

    stores: [
        'BusinessStore'
    ],

    views: [
        'LoggedOut',
        'Main',
        'Activity',
        'Dialog'
    ],

    controllers: [
        'Facebook'
//        'Viewings',
//        'YouTube'
    ],

    viewport: {
        autoMaximize: true // Causes the URL bar to be hidden once the application loads.
    },

    // This function will be run once the application is ready to be launched.
    launch: function() {

    	Parse.initialize("76pNu8GdWwx6sKxihputocKsegdhU3Z9Nl7VTawu", "XTZKhqnE8zUb2pEqIOzfCBV369SC9B2QOccKGvSA");
    	
        // Initialize Facebook with our app ID
        // WL.Facebook.initialize('308870105905592');
    	

        if (window.localStorage && window.localStorage.WL) {
            var parsed = JSON.parse(window.localStorage.WL);
            this.fireEvent('localStorageData', parsed);
        }

    }
});

