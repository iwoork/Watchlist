
Ext.define('WL.store.Movies', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'WL.model.Movie',
		autoload: true,
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
		}
    }
});
