Ext.define('WL.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',

        controllers: [
        	'Businesses'
        ],

        views: [
        	'WL.view.phone.business.Recommendation',
        	'WL.view.phone.business.Detail'
        ]
    },

    launch: function() {
        WL.view.phone.business.Recommendation.addXtype('recommendation');
        WL.view.phone.business.Detail.addXtype('businessDetail');
    },

    isActive: function() {
        return Ext.os.is.Phone;
    }
});
