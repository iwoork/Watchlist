/**
 * This view contains functionality shared between the movie list component for Phone and Tablet profiles.
 */
Ext.define('WL.view.business.List', {
	extend: 'Ext.List',
	requires: [
		'Ext.form.Panel',
		'Ext.plugin.ListPaging',
		'Ext.TitleBar',

		'WL.view.business.SortBar',
		'WL.view.business.SearchBar'
	],

	config: {
		id: 'businessList',
		store: 'BusinessList',

        plugins: [
            { xclass: 'Ext.plugin.ListPaging' } //To use this plugin its very important to include also CSS mixin : @include sencha-list-paging;
        ],

		itemCls: 'expandedBusiness',

        itemHeight:114, //specify customItemHeight for 2.1
//		// Specifying the `items` config on an Ext.List will add them at the top of the list, before the list itself.
		items: [

//            { xtype: 'businessSortBar' , docked:'top'},
            { xtype: 'businessSearchBar' , docked:'top' , hidden:true}
		],

		loadingText: null
	},

  
});
