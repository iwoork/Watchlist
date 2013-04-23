Ext.define('WL.view.Main', {

	extend: 'Ext.Container',

	requires: [
		'Ext.SegmentedButton',
		'WL.view.business.List',
		//'WL.view.business.Carousel',
	],

	xtype: 'main',

	config: {
		fullscreen: true,
		layout: {
			type: 'vbox',
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
//		            {
//		                xtype: 'segmentedbutton',
//		                allowDepress: false,
//		                items: [
//		                    {
//		                        xtype: 'button',
//		                        cls: 'movies',
//		                        iconCls: 'fui-location-24',
//		                        pressed: true
//		                    },
//		                    {
//		                        xtype: 'button',
//		                        cls: 'friends',
//		                        iconCls: 'fui-man-24'
//		                    }
//		                ]
//		            },
		            {    xtype: 'spacer'    },
//		            {
//		                xtype: 'button',
//		                cls: 'searchBtn',
//		                iconCls: 'search'
//		            },
		            {
		            	xtype: 'component',
		            	cls: 'fbProfilePic',
		            	id: 'fbProfilePic',
		            	tpl: '<img src="http://graph.facebook.com/{profileId}/picture?type=square" />'
		            }
		        ]
		    },
		    {
		    	xtype: 'businessList'
		    }
		]
	},

    initialize: function() {
        var me = this;

        me.on('painted', function() {
            me.fireEvent('viewready', me);
        }, null, { single : true });

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