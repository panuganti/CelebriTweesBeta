import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Import All Services
import { ServiceCaller } from '../providers/service-caller';

// Import All Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { StreamsPage } from '../pages/streams/streams';
import { ComposePage } from '../pages/compose/compose';
import { DmsPage}  from '../pages/dms/dms';
import { ComposeDmPage } from '../pages/compose-dm/compose-dm';
import { SearchPage } from '../pages/search/search';

// Import All Components
import { FeedHeaderComponent } from '../components/feed-header/feed-header';
import { ReactionComponent } from '../components/reaction/reaction';
import { TweetComponent } from '../components/tweet/tweet';
import { CelebrityComponent } from '../components/celebrity/celebrity';
import { TwitterTextComponent } from '../components/twitter-text/twitter-text';
import { CelebrityReactionComponent } from '../components/celebrity-reaction/celebrity-reaction';
import { NotificationComponent } from '../components/notification/notification';
import { DirectMessageRoomComponent } from '../components/direct-message-room/direct-message-room';

export const firebaseConfig = {
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
    CelebrityComponent,
    NotificationsPage,
    StreamsPage,
    ComposePage,
    NotificationComponent,
    DmsPage,
    ComposeDmPage,
    DirectMessageRoomComponent,
    SearchPage
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
    CelebrityComponent,
    NotificationsPage,
    StreamsPage,
    ComposePage,
    NotificationComponent,
    DmsPage,
    ComposeDmPage,
    DirectMessageRoomComponent,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ServiceCaller]
})
export class AppModule {}
