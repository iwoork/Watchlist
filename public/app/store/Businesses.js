
Ext.define('WL.store.Businesses', {
    extend  : 'Ext.data.Store',

    config: {
    	storeId: 'Businesses',
        model: 'WL.model.Business',
        autoLoad: true,
        proxy: {
          url: 'https://api.mongolab.com/api/1/databases/chowheredb/collections/restaurants',
          type: 'rest',
          encodeRequest: true,
          method: 'GET',
          limitParam: false,
          enablePagingParams: false,
          startParam: false,
          reader: {
          },
          extraParams: {
            view: 'json',
            l: 10,
            s: Ext.encode({'rating':{'positive': -1}}),
            apiKey: '5083ab6ae4b0940f2c2e5db7',
            q: Ext.encode({
              'coordinates':{
                '$maxDistance': 30
              }
            })
          }
        }
      }

        
//
//        proxy: {
//            type: 'jsonp'
//            url: '/businesses',
//
//            reader: {
//                type: 'json',
//                rootProperty: 'businesses'
//            }
//        }

});
