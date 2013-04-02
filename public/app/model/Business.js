Ext.define('WL.model.Business', {
  extend: 'Ext.data.Model',
    config: {
      fields: [
        { name: '_id',     type: 'auto', mapping: 'id' },
        { name: 'address',     type: 'auto' },
        { name: 'coordinates',     type: 'auto' },
        { name: 'rating',      type: 'auto' },
        { name: 'categories',      type: 'auto' },
        { name: 'name',        type: 'string' },
        { name: 'phone',       type: 'string' }
      ]
    }
});


///**
// * Business definition
// */
//Ext.define('WL.model.Business', {
//    extend: 'Ext.data.Model',
//
//    config: {
//
//        idProperty : "rottenId",
//
//        fields: [
//            'rottenId',
//
//            'title',
//            'genres',
//
//            'smallImage',
//            'largeImage',
//
//            'userRating',
//            'criticRating',
//            'criticsConsensus',
//
//            'tagline',
//            'synopsis',
//            'cast',
//            'director',
//            'writer',
//            'studio',
//            'mpaaRating',
//            'runTime',
//            'releaseDate',
//            'budget',
//            'revenue',
//            'homepage',
//            'trailer',
//
//            'imdbId',
//            'seen',
//            'wantToSee',
//            'like',
//            'dislike',
//
//            'friendActivity',
//
//            {
//                name: 'status',
//                type: 'string',
//                convert: function() {
//                    return 'In Theatres'
//                }
//            },
//            {
//                name: 'formattedRunTime',
//                type: 'string',
//                convert: function(v, record) {
//                    var hours = Math.floor(record.data.runTime / 60),
//                        mins = record.data.runTime % 60,
//                        fHours = (hours > 0 ? String(hours) + ' hr. ' : ''),
//                        fMins = (mins > 0 ? String(mins) + ' min.' : '');
//
//                    return fHours + fMins;
//                }
//            },
//            {
//                name: 'formattedReleaseDate',
//                type: 'string',
//                convert: function(v, record) {
//                    if (record.data.releaseDate) {
//                        var arr = record.data.releaseDate.split(/[- :T]/),
//                            date = new Date(arr[0], arr[1]-1, arr[2]);
//
//                        return "In Theaters " + Ext.Date.format(date, 'M j, Y');
//                    } else {
//                        return 'Unknown release date';
//                    }
//                }
//            }
//        ],
//
//        proxy: {
//            type: 'jsonp',
//            url: '/business',
//
//            reader: {
//                type: 'json',
//                rootProperty: 'businesses'
//            }
//        }
//    }
//});
