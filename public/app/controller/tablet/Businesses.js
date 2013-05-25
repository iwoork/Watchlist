/**
 * The tablet specific controller for Movies
 */
Ext.define('WL.controller.tablet.Businesses', {

    extend: 'WL.controller.Businesses',

    config: {
        refs: {
            tabletContainer: 'tabletContainer'
        }
    },

    init: function() {

        this.callParent();

//        WL.Facebook.on({
//            connected: this.onFacebookLogin,
//            logout: this.onFacebookLogout,
//            unauthorized: this.onFacebookUnauthorized,
//            scope: this
//        });
    },

    onFacebookLogin: function() {
        this.callParent(arguments);
        this.initContainer();
    },

    initContainer: function() {
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add({ xtype: 'tabletContainer' });
        }
    },

    showMovie: function(record) {
        WL.currentMovie = record;

        if (!this.businessDetailCmp) {
            this.businessDetailCmp = Ext.widget('businessDetail');
        }

        this.businessDetailCmp.setRecord(record);
        this.getToolbar().setTitle(record.get('title'));
        this.getTabletContainer().setActiveItem(this.businessDetailCmp);
    }
});
