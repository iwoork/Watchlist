/**
 * This is a Phone specific controller for Movies.
 */
Ext.define('WL.controller.phone.Businesses', {
    extend: 'WL.controller.Businesses',

    config: {
        routes: {
            'home': 'onBusinessBack'
        },
        control: {
            '#businessBackButton': {
                tap: 'doBusinessBack'
            }
        },
        refs: {
            toolbar: 'businessDetail titlebar'
        }
    },

    init: function() {

        this.callParent();

        WL.Facebook.on({
            connected: this.onFacebookLogin,
            logout: this.onFacebookLogout,
            unauthorized: this.onFacebookUnauthorized,
            scope: this
        });
    },

    onFacebookLogin: function() {
        this.callParent(arguments);
        this.initContainer();
    },

    initContainer: function() {
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add({ xtype: 'main' });
        }
    },

    showBusiness: function(record) {
        WL.currentBusiness = record;

        if (!this.businessDetailCmp) {
            this.businessDetailCmp = Ext.widget('businessDetail');
        }

        this.getToolbar().setTitle(record.get('title'));

        Ext.Viewport.animateActiveItem(this.businessDetailCmp, {
            type: 'slide',
            direction: 'left'
        });

        // This needs to be after the item is painted so we can set the content height
        this.businessDetailCmp.setRecord(record);
    },

    doBusinessBack: function() {
        WL.app.updateUrl('home');
        this.onBusinessBack();
    },

    onBusinessBack: function() {
        Ext.Viewport.animateActiveItem(this.getMain(), {
            type: 'slide',
            direction: 'right'
        });
    }

});
