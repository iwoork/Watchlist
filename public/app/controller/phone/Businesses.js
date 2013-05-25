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

    },
    
    initContainer: function() {
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add({ xtype: 'main' });
        }
    }

});
