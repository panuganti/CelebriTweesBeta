export interface Tweet  extends Entity{
    userid: string;
    img: string;
    tweetText: string;
    time: Date;
}

export interface Profile extends Entity {
    avatar: string;
    followerList: string[];
    name: string;
}

export interface User extends Profile{
    from: Date;  
    handle: string;  
    watchlist: string[];
    followList: string[];
}

export interface Celeb extends Profile {
    img: string;
}

export interface Notification extends Entity {
    userid: string;
    text: string;
    time: Date;    
    byuser: string;
}

export interface Entity {
    id: string;
}

/*
Tables:
    * Users/authid/{avatar,name,handle,watchlist,followList}
    * Celeb/id/img,followCount
    * Trending/CelebIds[]
    * Tweets/tweetid/{id,text,time,img,userid}
    * CelebTweets/Celeb/{tweetids}
    * UserTweets/userid/{tweetids}
    * TweetLikes/id/Likers[]
    * TweetRetweets/id/Retweeters[]
    * DMs/user1_user2/messages[]/{time,text, sender}
    * Notifications/userid/

    1) Get Feed - celebs from Users/authid/watchlist; then foreach, Tweets/Celebid/, merge
    2) Get watchlist - Users/authid/watchlist, Celeb profile from id
    3) Get Trending - Trending/Celebids, Celeb profile from Celeb/id..
    4) Notifications - Notifications/userid/.. 
    5) DMs - DMs/user1_user2/messages[]..each message...get profile
    6) Compose - Add to Tweets table, to CelebTweets table, UserTwets table
    7) Like, Retweet - Tweetlikes/id/likes array .. Notification table
    8) Send DM - Add to DMs/user1_user2 .. Notification table
    9) Get streams - later
    10) Login - Check Users/authid .. else, create 
    11) Update profile - Update Users/authid
    
*/