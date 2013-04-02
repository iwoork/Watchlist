Ext.define('WL.view.tablet.business.List', {

	extend: 'WL.view.business.List',

	config: {

		listeners: {
            itemtap: function(dataview, index, target, record, evt) {
                var el = Ext.get(evt.target);
            	this.fireEvent('tapBusiness', record, el);
            }
        },

		itemTpl: Ext.create('Ext.XTemplate',
		    '<div class="img"><img src="{smallImage}" /></div>',
		    '<div class="meta">',
		        '<h3>{title}</h3>',
		        '<div class="actions">',
		            '<div class="rating"><span>{% if (values.criticRating >= 0) { %}{criticRating}%{% } else { %}?{% } %}</span></div>',
            		'<p>{mpaaRating}, {formattedRunTime}</p>',
            		'<p>{formattedReleaseDate}</p>',
		        '</div>',
		        '<div class="friends">{[this.friendActivity(values.friendActivity)]}</div>',
		    '</div>'
		)
    }
});
