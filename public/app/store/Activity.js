
Ext.define('WL.store.Activity', {
    extend: 'Ext.data.Store',

    config: {
        fields: [
            'profileId', 'businessId', 'title', 'name', 'date', 'action'
        ],

        pageSize: 20,

        proxy: {
            type: 'jsonp',
            url: '/activity',

            reader: {
                type: 'json',
                rootProperty: 'activity'
            }
        }
    }
});
