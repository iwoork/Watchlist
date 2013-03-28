/**
 * The definition for the Sort bar at the top of the movie list
 */
Ext.define('WL.view.business.SortBar', {

	extend: 'Ext.Toolbar',
	xtype: 'businessSortBar',

	config: {

		cls: 'sort',
		id: 'sortContainer',
		//style: 'visibility: hidden',

		items: [
			{
				xtype: 'segmentedbutton',
				id: 'sortBy',
				flex: 1,

				layout: {
					pack: 'center'
				},

				defaults: {
		    		xtype: 'button',
		    		flex: 1
				},

				items: [
		    		{ text: 'Rating', pressed: true },
		    		{ text: 'Friends' },
		    		{ text: 'Popular' }
				]
			}
		]
	}
});
