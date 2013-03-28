
Ext.define('WL.store.Movies', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'WL.model.Movie',

        pageSize: 20,

        proxy: {
            type: 'jsonp',
            url: '/recommendations',

            reader: {
                type: 'json',
                rootProperty: 'movies'
            }
        }
    }
});
