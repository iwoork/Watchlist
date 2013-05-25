
Ext.define('WL.store.BusinessStore', {
    extend  : 'Ext.data.Store',
    requires: [
      'Ext.data.proxy.JsonP'
    ],
    config: {
    	autoLoad: false,
    	clearOnPageLoad: false,
        model: 'WL.model.Business',
        pageSize: 5,
        storeId: 'BusinessStore',    
        proxy: {
          url: 'https://api.parse.com/1/functions/recommendations',
          type: 'rest',
          useDefaultXhrHeader: false,
          withCredentials: false,
          useDefaultHeader : false,
          limitParam: false,
          enablePagingParams: false,
          startParam: false,
          pageParam: false,
          noCache: false,
          headers: {
            'X-Parse-Application-Id':  '76pNu8GdWwx6sKxihputocKsegdhU3Z9Nl7VTawu',
            'X-Parse-REST-API-KEY': 'auf8lwa2f4N9CTpAHXnlE3rGSDBgeotlbrv3O3Ia'
          },
          format: 'json',
          reader: {
            type: 'json',
            rootProperty: 'result'
          },
          writer: {
        	encodeRequest: true,
        	type: 'json'
          }
        }
    }

});
