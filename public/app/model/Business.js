Ext.define('WL.model.Business', {
  extend: 'Ext.data.Model',
    config: {
      fields: [
        { name: 'objectId',     type: 'auto', mapping: 'id' },
        { name: 'address',     type: 'auto' },
        { name: 'photos',     mapping: 'foursquare.venue.photos' },
        { name: 'location',      type: 'auto' },
        { name: 'name',      type: 'auto' },
        { name: 'phone',        type: 'string' },
        { name: 'price',       type: 'auto' },
        { name: 'rating',       type: 'auto' },
      ]
    }
});
