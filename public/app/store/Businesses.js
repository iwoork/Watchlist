
Ext.define('WL.store.Businesses', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'WL.model.Business',

        pageSize: 20,

        proxy: {
            type: 'jsonp',
            url: '/businesses',

            reader: {
                type: 'json',
                rootProperty: 'businesses'
            }
        }
    }
});
