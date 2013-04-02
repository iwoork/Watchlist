Ext.define('WL.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',

        controllers: [
        	'Businesses'
        ],

        views: [
        	'Container',
            'WL.view.tablet.business.List',
        	'WL.view.tablet.business.Detail'
        ]
    },

    launch: function() {
        WL.view.tablet.business.List.addXtype('businessList');
        WL.view.tablet.business.Detail.addXtype('businessDetail');
    },

    isActive: function() {
        return !Ext.os.is.Phone;
    }
});
