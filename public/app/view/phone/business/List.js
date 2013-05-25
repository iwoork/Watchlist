Ext.define('WL.view.phone.business.List', {
	extend: 'WL.view.business.List',
	config: {
		id: 'businessList',
		disableSelection: true,
	    itemTpl: Ext.create('Ext.XTemplate',
	      '<div class="restaurant">',
            '<div class="photo"><img style="width:280px;height:160px;" src="{[values.photos.groups[0].items[0].prefix]}280x160{[values.photos.groups[0].items[0].suffix]}" /></div>',
	        '<div class="name"><b>{name}</b></div>',
	        '<div class="phone">{phone}</div>',
	        '<tpl for="address">',
	          '<div class="address"><small>{en}</small></div>',
	        '</tpl>',
	      '</div>'
	    ),
	    loadingText: "Please wait while we do the thinking for you...",
	    emptyText: 'No recommendations found!'
    }
});
