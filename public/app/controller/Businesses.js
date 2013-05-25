/**
 * This controller handles functions common to both Phone and Tablets
 */
Ext.define('WL.controller.Businesses', {
    extend: 'Ext.app.Controller',
    require: [
      'WL.view.business.Recommendation'
    ],
    config: {

        refs: {
            recommendation: {
                selector: 'recommendation',
                xtype: 'recommendation',
                autoCreate: true
           },
            main: 'main',
            loggedOut: 'loggedOut',
            fbPhoto: '#fbProfilePic'
        },

        control: {
//            businessDetail: {
//                postToWall:  'onPostToWall',
//                sendToFriend:'onSendToFriend',
//                playTrailer: 'onPlayTrailer'
//            },
//            activity: {
//                itemtap: 'onViewingTap'
//            },
//            searchButton: {
//                tap: 'onSearchButton'
//            },
//            '#sortBy': {
//                toggle: 'onSortToggle'
//            },
//            '#searchField': {
//                action: 'onSearch',
//                change: 'onSearch',
//                clearicontap: 'onSearchClear'
//            },
//            'toolbar button[iconCls=fui-location-24]': {
//                tap: 'onBusinessIconTap'
//            },
//            'toolbar button[iconCls=fui-man-24]': {
//                tap: 'onActivityIconTap'
//            },
            '#fbProfilePic': {
                tap: 'onProfileTap'
            },
            '#logoutButton': {
                tap: 'logout'
            },
//            '#businessShareButton': {
//                tap: 'onBusinessShare'
//            }
        }
    },

    init: function() {
    	var me = this;
//        WL.app.on({
//            localStorageData: 'onLocalStorageData',
//            scope: me
//        });
//console.log(me.getRecommendations());
        me.getLocation(function (location) {
            me.getBusinesses(location, function (store) {
            	//console.log(store);
                // then bind data to list and show it
                me.getRecommendation().setStore(store);
                //console.log(me.getRecommendation().setStore(store));
            });
        });
    },

//    onLocalStorageData: function(data) {
//        var store = Ext.getStore('BusinessStore');
//console.log('here');
//        this.initContainer();
//        store.setData(data);
//        store.fireEvent('load', store, store.data);
//        this.onFirstLoad(data.profileId);
//    },

    onFacebookLogin: function() {

        Ext.getStore('BusinessStore').onBefore('datarefresh', function(store, data, operation, eOpts, e) {
        	//console.log(operation.getResponse());
//            var cache = JSON.stringify({
//                businesses: operation.getResponse().responseText,
//                profileId: FB.getUserID()
//            });
console.log(cache);
            if (window.localStorage && window.localStorage.WL && window.localStorage.WL == cache) {
                return false;
            }

            window.localStorage.WL = cache;

            if (!this.firstLoad) {
                this.onFirstLoad(FB.getUserID());
                this.firstLoad = true;
            }
        }, this);
        
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
      var store = Ext.getStore('BusinessStore');
      
      store.getProxy().setExtraParams({
        'location': {
          'latitude': location.coords.latitude,
          'longitude':location.coords.longitude
        },
        'limit': false
      });
      store.load(function() {
          callback(store);
      });
      

      //console.log(Ext.getStore('Businesses').setProxy(proxyParams));
      //Ext.getStore('Businesses').setProxy(proxyParams).load();
    },

    onFirstLoad: function(profileId) {
        getFbPhoto.setData({
            profileId: profileId
        });
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
        //FB.logout();
        Parse.User.logOut();
    },

    onFacebookLogout: function() {

        Ext.getBody().addCls('splashBg');
        Ext.Viewport.setActiveItem({ xtype: 'loggedOut' });

        this.getMain().destroy();
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

