import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { FeedHeaderComponent } from '../components/feed-header/feed-header';
import { ReactionComponent } from '../components/reaction/reaction';
import { TweetComponent } from '../components/tweet/tweet';
//import { Tweet } from '../library/tweet';
import { CelebrityComponent } from '../components/celebrity/celebrity';
import { TwitterTextComponent } from '../components/twitter-text/twitter-text';
import { CelebrityReactionComponent } from '../components/celebrity-reaction/celebrity-reaction';

export const firebaseConfig = {
    apiKey: "AIzaSyA59EnGk7BycwQjlCv5nYb4bZqLKjaZK9w",
    authDomain: "celebtweetsbeta.firebaseapp.com",
    databaseURL: "https://celebtweetsbeta.firebaseio.com",
    storageBucket: "celebtweetsbeta.appspot.com",
    messagingSenderId: "765679640305"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FeedHeaderComponent,
    ReactionComponent,
    TweetComponent,
    TwitterTextComponent,
    CelebrityReactionComponent,
    CelebrityComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FeedHeaderComponent,
    ReactionComponent,
    TweetComponent,
    TwitterTextComponent,
    CelebrityReactionComponent,
    CelebrityComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
