import React, { useState } from 'react';
import mongoose from 'mongoose';
import dateAndTime from 'date-and-time';
import { Link } from 'react-router-dom';
import IndexDD from './Index_DD';

const NavBar = ({
  dashboardFeed,
  searchQuery,
  setSearchQuery,
  results,
  indexData
}) => {
  let [indexShow, setIndexShow] = useState(true)

  const resultsDropDown = () => {
    if (results && searchQuery) {
      return (
        <div
          className='resultsDD'
        >
          {results.searchPosts.map(obj => {
            return (
              <div
                key={obj._id}
                className='titleAndDateContainer'
              >
                <h1>{obj.title}</h1>
                <span
                  hidden
                >{obj._id}</span>
                <h3>
                  {
                    dateAndTime.format(
                      mongoose.Types.ObjectId(obj._id).getTimestamp(), 
                      'dddd, MMMM DD YYYY'
                    )
                  }
                </h3>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const handleNavLinks = () => {
    if (!dashboardFeed) {
      return (
        <React.Fragment>
          <Link
            className='fullNameHomeLink'
            to='/'
          >
            John O'Brien Developer
          </Link>

          <Link
            className='homeLink'
            to='/'
          >
            Home
          </Link>
        </React.Fragment>
      )
    }
  }

  return (
    <div
      className='searchAndIndexNav'
    >
      <div
        className='postIndex'
        tabIndex={-1}
        onBlur={e => {
          if (e.relatedTarget === null) {
            // setIndexShow(indexShow = false)
          }
        }}
      >
        <span
          onClick={() => {
            if (indexShow)
              setIndexShow(indexShow = false)
            else {
              setIndexShow(indexShow = true)
            }
          }}
        >
          Post Index
        </span>
        <IndexDD
          indexShow={indexShow}
          index={indexData.fetchIndex}
          dashboardFeed={dashboardFeed}
        />
      </div>

      <div
        className='searchInput'
      >
        <input
          placeholder='search posts'
          className='searchInput'
          value={searchQuery}
          onChange={e => {
            setSearchQuery(searchQuery = e.target.value)
          }}
        />
        {resultsDropDown()}
      </div>

      {handleNavLinks()}
      
    </div>
  )
}

export default NavBar;