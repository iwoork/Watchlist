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
	    emptyText: 'No recommendations found!',
//		itemTpl: Ext.create('Ext.XTemplate',
//            '<div class="moreArrow"></div>',
//		    '<div class="img"><img src="http://src.sencha.io/58/{smallImage}" /></div>',
//		    '<div class="meta">',
//		        '<h3>{title}</h3>',
//		        '<div class="actions">',
//		            '<div class="rating"><span>{% if (values.criticRating >= 0) { %}{criticRating}%{% } else { %}?{% } %}</span></div>',
//		            '<button class="seen{[values.seen ? " selected" : ""]}">Seen It</button>',
//		            '{% if (values.seen) { %}',
//			            '<button class="thumb up{[values.like ? " selected" : ""]}"><b></b></button>',
//			            '<button class="thumb down{[values.dislike ? " selected" : ""]}"><b></b></button>',
//		            '{% } else { %}',
//			            '<button class="want{[values.wantToSee ? " selected" : ""]}">Want to See It</button>',
//			        '{% } %}',
//		        '</div>',
//		        '<div class="friends">{[this.friendActivity(values.friendActivity)]}</div>',
//		    '</div>'
//		)
    }
});
