
Ext.define('WL.store.BusinessStore', {
    extend  : 'Ext.data.Store',
    requires: [
      'Ext.data.proxy.JsonP'
    ],
    config: {
    	autoLoad: true,
    	clearOnPageLoad: false,
        model: 'WL.model.Business',
        pageSize: 5,
        storeId: 'BusinessStore',    
        proxy: {
          url: 'https://api.parse.com/1/classes/Restaurant',
          type: 'rest',
          useDefaultXhrHeader: false,
          headers: {
            'X-Parse-Application-Id':  '76pNu8GdWwx6sKxihputocKsegdhU3Z9Nl7VTawu',
            'X-Parse-REST-API-KEY': 'auf8lwa2f4N9CTpAHXnlE3rGSDBgeotlbrv3O3Ia'
          },
          format: 'json',
          reader: {
            type: 'json',
            rootProperty: 'results'
          }
        }
    }

});
