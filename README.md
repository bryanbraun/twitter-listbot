Twitter Listbot
==================

This is a simple twitter bot, designed to retweet the contents of a twitter list.

This implementation tweets for [@StoriesInData](https://twitter.com/StoriesInData).

## Setup Your Own
1. [Install node.js & npm](http://nodejs.org/download/) (if you haven't already).
2. Download this repo with `git clone git@github.com:bryanbraun/twitter-listbot.git`.
3. Run `npm install` to download dependencies.
4. Open `index.js` and replace the values in the `config` object with your own.
5. [Create a twitter application](https://apps.twitter.com/app/new), grant it the necessary access, and generate your tokens/keys.
6. Deploy the bot to heroku (you can [use these instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) as a guide).

## Credit
Twitter Listbot is written in [node.js](http://nodejs.org/) and based on [Sugendran](https://github.com/sugendran)'s [node-retweeter](https://github.com/sugendran/node-retweeter).

