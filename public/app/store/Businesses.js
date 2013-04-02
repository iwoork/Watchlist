
Ext.define('WL.store.Businesses', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'WL.model.Business',
        encodeRequest: true,
        method: 'GET',
        limitParam: false,
        enablePagingParams: false,
        startParam: false,
        type: 'rest',
        autoLoad: true,
        reader: {
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
    }
});
