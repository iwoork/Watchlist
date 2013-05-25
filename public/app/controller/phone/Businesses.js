/**
 * This is a Phone specific controller for Movies.
 */
Ext.define('WL.controller.phone.Businesses', {
    extend: 'WL.controller.Businesses',

    config: {
        routes: {
        },
        control: {
           
        },
        refs: {
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
    
//    onFacebookLogin: function() {
//        this.callParent(arguments);
//        this.initContainer();
//    },
    
    initContainer: function() {
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add({ xtype: 'main' });
        }
    }

    


});
