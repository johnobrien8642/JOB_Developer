import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import Login from '../components/auth/Login';
import AuthRoute from '../util/route_util';
import BlogFeed from './sections/Blog_Feed';
import LandingPage from './sections/Landing_Page';
import EditPost from './sections/Edit_Post';
import SinglePostShow from './sections/Single_Post_Show';

// uncomment below for email auth welcome page
// import WelcomePage from './auth/Welcome_Page';

import 'react-h5-audio-player/lib/styles.css';
import './../stylesheets/application.scss';

const App = () => {

  useEffect(() => {
    var listener = window.addEventListener('scroll', () => {
      document.querySelector('body').style.setProperty('--scroll-y', 
      `${window.scrollY}px`)
    })

    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return (
    <React.Fragment>
      <Switch>
        {/* <Redirect from='/' to='/dashboard' /> */}
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/blog' component={BlogFeed} />
        <Route exact path='/blog/:postId' component={SinglePostShow} />

        {/* <AuthRoute path='/dashboard' component={Dashboard} />
        <AuthRoute exact path='/login' component={Login} routeType={'auth'} /> */}
        {/* <Route exact path='/' component={LandingPage} /> */}

        <Redirect exact from='/' to='/dashboard' />
        <AuthRoute exact path='/dashboard' component={Dashboard} />
        <AuthRoute exact path='/login' component={Login} routeType={'auth'} />
        <AuthRoute exact path='/edit/:postId' component={EditPost} />
        
        {/* <AuthRoute exact path='/register' component={Register} routeType={'auth'} /> */}
        {/* <AuthRoute path={'/view/tag/:tagTitle'} component={TagFeed} />
        <AuthRoute path={'/view/blog/:blogName'} component={UserBlogShow} />
        <AuthRoute exact path={'/settings/account'} component={UserSettings} />
        <AuthRoute exact path='/blog/view/:blogName/:postId' component={UserPostShow} />
        <AuthRoute 
          exact path={['/followers', '/following', '/activity']} 
          component={UserFollowersOrFollowingOrActivityFeed} 
        />
        <AuthRoute exact path='/discover' component={Discover} />
        <AuthRoute exact path='/likes' component={UserPostLikesFeed} /> */}

        {/* uncomment below for email auth welcome page */}
        {/* <AuthRoute exact path='/welcome' component={WelcomePage} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
