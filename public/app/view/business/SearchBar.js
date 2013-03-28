/**
 * The definition for the Search bar at the top of the business list
 */
Ext.define('WL.view.business.SearchBar', {

	extend: 'Ext.form.Panel',
	xtype: 'businessSearchBar',

	config: {

    	scrollable: false, // Override the form panel
    	//style: 'visibility: hidden',
        cls: 'search',
        id: 'searchContainer',

        items: [
        	{
        		xtype: 'textfield',
        		clearIcon: true,
        		labelWidth: 0,
		        inputCls: 'searchField',
        		placeHolder: 'Enter Search Term',
        		id: 'searchField'
        	}
        ]
	}
});
