/**
 * This controller handles functions common to both Phone and Tablets
 */
Ext.define('WL.controller.Businesses', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'businesses/:id': 'onBusinessUrl'
        },

        refs: {
            businessList: '#businessList',
            main: 'main',
            loggedOut: 'loggedOut',
            toolbar: 'businessDetail toolbar',
            sortBar: 'businessSortBar',
            searchBar: 'businessSearchBar',
            searchButton: 'main toolbar button[iconCls=search]'
        },

        control: {
            businessList: {
                tapBusiness:    'onBusinessTap'
            },
            businessDetail: {
                postToWall:  'onPostToWall',
                sendToFriend:'onSendToFriend',
                playTrailer: 'onPlayTrailer'
            },
            activity: {
                itemtap: 'onViewingTap'
            },
            searchButton: {
                tap: 'onSearchButton'
            },
            '#sortBy': {
                toggle: 'onSortToggle'
            },
            '#searchField': {
                action: 'onSearch',
                change: 'onSearch',
                clearicontap: 'onSearchClear'
            },
            'toolbar button[iconCls=movies]': {
                tap: 'onBusinessIconTap'
            },
            'toolbar button[iconCls=friends]': {
                tap: 'onActivityIconTap'
            },
            '#fbProfilePic': {
                tap: 'onProfileTap'
            },
            '#logoutButton': {
                tap: 'logout'
            },
            '#businessShareButton': {
                tap: 'onBusinessShare'
            }
        }
    },

    init: function() {
    	var me = this;
        WL.app.on({
            localStorageData: 'onLocalStorageData',
            scope: me
        });

        me.getLocation(function (location) {
            me.getBusinesses(location, function (store) {
            	console.log(me.getBusinessList());
            	console.log(store);
                // then bind data to list and show it
                me.getBusinessList().setStore(store);

            });
        });
//        var learnMore = Ext.ComponentQuery.query('promo-container');
//
//        learnMore.element.on({
//            tap: this.onAbout,
//            scope: this,
//            delegate: 'button'
//        });
    },

    onLocalStorageData: function(data) {
        var store = Ext.getStore('BusinessStore');

        this.initContainer();
        store.setData(data);
        store.fireEvent('load', store, store.data);

        this.onFirstLoad(data.profileId);
    },

    onFacebookLogin: function() {

        Ext.getBody().removeCls('splashBg');

        Ext.getStore('Businesses').onBefore('datarefresh', function(store, data, operation, eOpts, e) {

            var cache = JSON.stringify({
                businesses: operation.getResponse().businesses,
                profileId: FB.getUserID()
            });

            if (window.localStorage && window.localStorage.WL && window.localStorage.WL == cache) {
                return false;
            }

            window.localStorage.WL = cache;

            if (!this.firstLoad) {
                this.onFirstLoad(FB.getUserID());
                this.firstLoad = true;
            }
        }, this);
        
        // Use mongolab db for now
//        var proxyParams = {
//        		type: 'rest',
//        		url: WL.config.mongoApi + 'restaurants'	,
//        		extraParams: {
//        			view: 'json',
//        	        l:5,
//        	        s: Ext.encode({'rating':{'positive': -1}}),
//        	        apiKey: WL.config.mongoApiKey,
//        	        q: Ext.encode({
//        	          'coordinates':{
//        	        	  //'$near':[WL.config.lat, WL.config.lon], 
//        	        	  '$maxDistance': 30
//        	          }
//        	        })
//        		}
//        };
//        console.log(Ext.getStore('Businesses').setProxy(proxyParams));
//        Ext.getStore('Businesses').setProxy(proxyParams).load();
        
    },
    
    getLocation: function(callback) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                // give a warning for error
            });
        }
    },
    

    getBusinesses: function(location, callback) {
      var store = Ext.getStore('BusinessStore'),
          proxyParams = {
    	  	type: 'rest',
    	  	url: WL.config.mongoApi + 'restaurants'	,
            limitParam: false,
            enablePagingParams: false,
            startParam: false,
    	  	extraParams: {
    	  		view: 'json',
    	  		l:5,
    	  		s: Ext.encode({'rating':{'positive': -1}}),
    	  		apiKey: WL.config.mongoApiKey,
    	  		q: Ext.encode({
    	  			'coordinates':{
    	  				'$near':[location.coords.latitude, location.coords.longitude], 
    	  				'$maxDistance': 30
    	  			}
    	  		})
    	  	}
      	};
      store.setProxy(proxyParams).load(function() {
          callback(store);
      });

      //console.log(Ext.getStore('Businesses').setProxy(proxyParams));
      //Ext.getStore('Businesses').setProxy(proxyParams).load();
    },

    onFirstLoad: function(profileId) {
        Ext.getCmp('fbProfilePic').setData({
            profileId: profileId
        });

//        var learnMore = Ext.ComponentQuery.query('#promo-container')[0];
//
//        learnMore.element.on({
//            tap: this.onAbout,
//            scope: this,
//            delegate: 'button'
//        });
    },

    /**
     * When a user clicks the search button, scroll to the top
     */
    onSearchButton: function() {
        var bar = this.getBusinessList().down('businessSearchBar');
        if(bar.getHidden()){
            bar.show({type: 'fade'});
        }else{
            bar.hide();
        }
    },

    onBusinessTap: function(record) {
        WL.app.updateUrl('businesses/' + record.get('rottenId'));
        this.showBusiness(record);
    },

    onViewingTap: function(list, idx, el, record) {
        this.onBusinessUrl(record.get('businessId'));
    },

    onBusinessUrl: function(businessId) {
        var businessStore = Ext.getStore('Businesses'),
            business = businessStore.findRecord('rottenId', businessId);

        if (business) {
            this.showBusiness(business);
        } else {
            WL.model.Business.load(businessId, {
                success: function(business) {
                    this.showBusiness(business);
                },
                scope: this
            });
        }
    },

    onSearch: function(searchField) {

        var searchStore = Ext.getStore('Search'),
            value = searchField.getValue();

        if (value != '') {
            this.getBusinessList().setMasked({ xtype: 'loadmask' });
            searchStore.load({
                params: { q: searchField.getValue() },
                callback: function() {
                    this.getBusinessList().setStore(searchStore);
                    this.getBusinessList().setMasked(false);
                },
                scope: this
            });
        }
    },

    onSearchClear: function() {
        this.getBusinessList().setStore(Ext.getStore('Businesses'));
    },

    onBusinessIconTap: function() {
        this.getSearchButton().show();
        this.getMain().setActiveItem(this.getBusinessList());
    },

    onActivityIconTap: function() {

        this.getSearchButton().hide();

        if (!this.activityCard) {
            this.activityCard = Ext.widget('activity');
            Ext.getStore('Activity').load();
        }
        this.getMain().setActiveItem(this.activityCard);
        this.activityCard.deselectAll();
    },

    onSortToggle: function(segBtn, btn){

        this.getBusinessList().setStore(Ext.getStore('Businesses'));
        this.getBusinessList().setMasked({ xtype: 'loadmask' });
        this.getBusinessList().deselectAll();

        Ext.getStore('Businesses').getProxy().setExtraParams({sort: btn.getText()});
        Ext.getStore('Businesses').loadPage(1);
    },

    /**
     * When the user profile picture is tapped, create a Logout button and pop it up next to the avatar.
     */
    onProfileTap: function(cmp) {

        if (!this.logoutCmp) {

            this.logoutCmp = Ext.create('Ext.Panel', {
                width: 120,
                height: 45,
                top: 0,
                left: 0,
                modal: true,
                cls:'float-panel', //2.1
                hideOnMaskTap: true,
                items: [
                    {
                        xtype: 'button',
                        id: 'logoutButton',
                        text: 'Logout',
                        ui: 'decline'
                    }
                ]
            });
        }

        this.logoutCmp.showBy(cmp);
    },

    /**
     * Hide the logout popup, then call the Facebook logout function. We have a listener elsewhere to deal with the
     * `logout` event the Facebook SDK fires once the user has successfully been logged out.
     */
    logout: function() {
        this.logoutCmp.hide();
        FB.logout();
    },

    onFacebookLogout: function() {

        Ext.getBody().addCls('splashBg');
        Ext.Viewport.setActiveItem({ xtype: 'loggedOut' });

        if (this.businessDetailCmp) {
            this.businessDetailCmp.destroy();
        }

        this.getMain().destroy();
    },

    onBusinessShare: function() {

        var me = this;

        Ext.create('WL.view.Dialog', {
            msg: "Share this business to your Wall?",
            items: [
                {
                    xtype: 'textfield',
                    labelWidth: 0,
                    width: '100%',
                    cls: 'wallMessage',
                    id: 'wallMessage',
                    placeHolder: 'Message...'
                }
            ],
            buttons: [
                {
                    ui: 'green',
                    text: 'Post to wall.',
                    handler: function() {
                        me.postToWall();
                        this.getParent().hide();
                    }
                },
                {
                    ui: 'red',
                    text: "No thanks.",
                    handler: function() {
                        this.getParent().hide()
                    }
                }
            ]
        }).show();
    },

    onAbout: function() {
        Ext.create('WL.view.Dialog', {
            msg: [
                "<p>The Watch List was built with Sencha Touch, a Javascript framework that lets you easily build ",
                "beautiful mobile apps using Javascript, HTML5 and CSS3.</p>"
            ].join(''),
            buttons: [
                {
                    ui: 'green',
                    text: 'Visit Sencha Touch Website',
                    handler: function() {
                        window.open("http://www.sencha.com/products/touch", "_blank");
                    }
                }
            ]
        }).show();
    },

    onPlayTrailer: function(business) {
        var videoId = business.get('trailer').match(/v=(.*)$/);
        WL.app.getController('YouTube').showTrailer(videoId[1]);
    },

    onFacebookUnauthorized: function() {
        if (this.mainContainer) {
            Ext.create('WL.view.Dialog', {
                msg: "Oops! Your Facebook session has expired.",
                buttons: [
                    {
                        ui: 'green',
                        text: 'Login to Facebook',
                        handler: function() {
                            window.location = WL.Facebook.redirectUrl();
                        }
                    }
                ]
            }).show();

        } else {
            Ext.Viewport.add({ xtype: 'loggedOut' });
        }
    }
});

