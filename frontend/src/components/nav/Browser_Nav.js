import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Search from '../search/Search';
import UserDetails from './User_Details';
import Activity from './Activity';
import ActivityCountIcon from '../nav/Activity_Count_Icon';

const BrowserNav = ({
  user,
  userDetailsCounts,
  loggedInBool,
}) => {
  let [searchClose, closeSearch] = useState(false)
  let [activityClose, closeActivity] = useState(false)
  let [detailsClose, closeDetails] = useState(false)
  let [activityOpen, setActivityOpen] = useState(false)
  let [detailsOpen, setDetailsOpen] = useState(false)
  let cursorId = useRef(new Date().getTime())
  let totalActivityCountRef = useRef(0)

  return (
    <div
      className='browserNav loggedIn'
    >
      <div
        className='navTools'
      >
        <Link
          className='projectsLink'
          to='/projects'
        >
          Projects
        </Link>
        <Link
          className=''
          to='/discover'
        >
          <img 
            src="https://img.icons8.com/ios/64/ffffff/compass--v1.png"
            alt=''
          />
        </Link>
        <div
          className='activityIcon'
          tabIndex={0}
          onClick={() => {
        
            if (activityOpen) {
              setActivityOpen(activityOpen = false)
            } else {
              totalActivityCountRef.current = 0
              cursorId.current = new Date().getTime()
              setActivityOpen(activityOpen = true)
            }
            if (detailsOpen) {
              setDetailsOpen(detailsOpen = false)
            }
            if (!searchClose) {
              closeSearch(searchClose = true)
            }
          }}
        >
          <img 
            src="https://img.icons8.com/fluent-systems-filled/64/ffffff/lightning-bolt.png"
            alt=''
          />
          {/* {renderTotalCount(totalActivityCountRef, activityCounts, activityOpen)} */}
          <ActivityCountIcon
            cursorId={cursorId.current}
          />
        </div>
        
        <Activity
          activityClose={activityClose}
          closeActivity={closeActivity}
          detailsClose={detailsClose}
          closeDetails={closeDetails}
          detailsOpen={detailsOpen}
          setDetailsOpen={setDetailsOpen}
          activityOpen={activityOpen}
          setActivityOpen={setActivityOpen}
        />
        <div
          className='userIcon'
          tabIndex={0}
          onClick={() => {
            if (detailsOpen) {
              setDetailsOpen(detailsOpen = false)
            } else {
              setDetailsOpen(detailsOpen = true)
            }
          
            if (activityOpen) {
              setActivityOpen(activityOpen = false)
            }
            if (!searchClose) {
              closeSearch(searchClose = true)
            }
          }}
        >
          <img
            src="https://img.icons8.com/material-rounded/64/ffffff/user.png"
            alt=''
          />
        </div>
        <UserDetails
          user={userDetailsCounts.user ? userDetailsCounts.user : null}
          profilePic={userDetailsCounts.user ? userDetailsCounts.user.profilePic : null}
          blogName={userDetailsCounts.user ? userDetailsCounts.user.blogName : null}
          blogDescription={userDetailsCounts.user ? userDetailsCounts.user.blogDescription : null}
          totalLikeCount={userDetailsCounts.user ? userDetailsCounts.user.totalLikeCount : null}
          userFollowCount={userDetailsCounts.user ? userDetailsCounts.user.userFollowCount : null}
          userPostsCount={userDetailsCounts.user ? userDetailsCounts.user.userPostsCount : null}
          followersCount={userDetailsCounts.user ? userDetailsCounts.user.followersCount : null}
          detailsClose={detailsClose}
          closeDetails={closeDetails}
          activityClose={activityClose}
          closeActivity={closeActivity}
          detailsOpen={detailsOpen}
          setDetailsOpen={setDetailsOpen}
          activityOpen={activityOpen}
          setActivityOpen={setActivityOpen}
        />
      </div>
    </div>
  )
}

export default BrowserNav;