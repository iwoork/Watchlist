Ext.define('WL.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',

        controllers: [
        	'Businesses'
        ],

        views: [
        	'WL.view.phone.business.Recommendation',
        ]
    },

    launch: function() {
        WL.view.phone.business.Recommendation.addXtype('recommendation');
    },

    isActive: function() {
        return Ext.os.is.Phone;
    }
});
