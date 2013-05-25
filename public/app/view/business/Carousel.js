/**
 * This view contains functionality shared between the movie list component for Phone and Tablet profiles.
 */
Ext.define('WL.view.business.Carousel', {
	extend: 'Ext.Carousel',
	xtype: 'carousel',
	id: 'carousel',
	fullscreen: true,
	config: {
		title: 'Carousel',
		defaults: {
			styleHtmlContent: true
		}
	},

});
