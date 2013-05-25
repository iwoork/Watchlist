Ext.define('WL.view.Main', {

	extend: 'Ext.Container',

	xtype: 'main',

	config: {
		layout: {
			type: 'card',
			animation: {
				type: 'fade'
			}
		},

		items: [
		    {
		        docked: 'top',
		        xtype: 'toolbar',
		        cls: 'small withBg',
		        title: '<div class="headerTitle"></div>',
		        items: [
		            {    xtype: 'spacer'    },
		            {
		            	xtype: 'component',
		            	cls: 'fbProfilePic',
		            	id: 'fbProfilePic',
		            	tpl: '<img src="http://graph.facebook.com/{profileId}/picture?type=square" />'
		            }
		        ]
		    },
		    {
		    	xtype: 'recommendation',
		    	store: 'BusinessStore'
		    }
		]
	},

    initialize: function() {
        var me = this;
        
        me.callParent();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var profilePic = Ext.getCmp('fbProfilePic');
        if (profilePic) {
            profilePic.element.on('tap', function(e) {
                profilePic.fireEvent('tap', profilePic, e);
            });
        }
    }
});