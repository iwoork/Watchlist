exports.config = {
    // Base URL of the App (must be a publically accessible URL)

    //What is this?
    redirect_uri:  'http://app.chowhere.com:3000',

    // Facebook App ID/API Key
    client_id:     '308870105905592',

    // Facebook Application Secret
    client_secret: '10c9a1537adfe073bcf565eeee65cdcb',

    // MongoDB endpoint
    //mongoDb:       'mongodb://USER:PASS@SERVER:PORT/DATABASE',
    //mongoDb:       'mongodb://user:mypass@aaaaaaa.mongolab.com:27847/watchlist',
    mongoDb: 'mongodb://mongochow:k3f12eNn@ds035237.mongolab.com:35237/chowheredb',

    // Session encyption key
    sessionSecret: 'efrenmacasaetjr',

    //What is this?
    appUrl: 'app.chowhere.com',

    //What is this?
    fbNamespace: 'chowhere',

    rottenTomatoesApiKey: '12341243531425642564356'
};