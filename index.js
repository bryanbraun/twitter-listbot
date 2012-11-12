// config is using environment vars so that 
// sensitive info is not in the repo
var conf = {
	keys: {
	    consumer_key: process.env.TWITTER_CONSUMER_KEY,
	    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	},
	terms: ['nodejs']
};

// going to use the tuiter node module to get access to twitter
var tu = require('tuiter')(conf.keys);

// what to do after we retweet something. 
// if it fails i really don't care unless 
// i'm debugging
function onReTweet(err) {
    if(err) {
        console.error("retweeting failed :(");
        console.error(err);
    }
}

// what to do when we get a tweet
function onTweet(tweet) {
    // if it's flagged as a retweet or has RT
    // in there then we probably don't want 
    // to retweet it again.
    if (tweet.retweeted) {
        return;
    }
    if (tweet.text.indexOf("RT") !== -1) {
        return;
    }
    console.log("Retweeting: " + tweet.text);
    // note we're using the id_str property since
    // javascript is not accurate for 64bit ints
    tu.retweet({
        id: tweet.id_str
    }, onReTweet);
}

// start listening to a twitter stream with the filter
// that is in the config
tu.filter({
    track: conf.terms
}, function(stream) {
    console.log("listening to stream");
    stream.on('tweet', onTweet);
});
