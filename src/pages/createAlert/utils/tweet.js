import { OAuth } from "oauth";

const sendTweet = (message) => {
  const twitter_application_consumer_key = `${process.env.REACT_APP_TACK}`; // API Key
  const twitter_application_secret = `${process.env.REACT_APP_TAS}`; // API Secret
  const twitter_user_access_token = `${process.env.REACT_APP_TUAT}`; // Access Token
  const twitter_user_secret = `${process.env.REACT_APP_TUS}`; // Access Token Secret

  const oauth = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    twitter_application_consumer_key,
    twitter_application_secret,
    "1.0A",
    null,
    "HMAC-SHA1"
  );

  const postBody = {
    status: message,
  };

  oauth.post(
    "https://api.twitter.com/1.1/statuses/update.json",
    twitter_user_access_token, // oauth_token (user access token)
    twitter_user_secret, // oauth_secret (user secret)
    postBody, // post body
    "", // post content type ?
    function (err, data, res) {
      if (err) console.log(err);
    }
  );
};

export default sendTweet;
