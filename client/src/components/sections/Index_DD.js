import mongoose from 'mongoose';
import { Link } from 'react-router-dom';
import dateAndTime from 'date-and-time';
import hash from 'object-hash';
import React, { useState } from 'react';

const IndexDD = ({
  indexShow,
  index,
  dashboardFeed
}) => {
  let copy = JSON.parse(JSON.stringify(index))
  let [indexBools, setIndexBools] = useState(copy.hookBoolObj)
  console.log(copy)
  const handlePostRows = (month, indexYearObj, hidePosts) => {
    if (hidePosts) {
      return indexYearObj[month].map(post => {
        return (
          <div
            className='postRow'
            key={post._id}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <span>
              {
                dateAndTime.format(
                  mongoose.Types.ObjectId(post._id).getTimestamp(),
                  'dddd, DD'
                )
              }
            </span>

            <Link
              to={`/blog/${post._id}`}
            >{post.title}</Link>
          </div>
        )
      })
    } else {
      return <React.Fragment />
    }
  }
  
  const handleMonthRows = (year, indexYearObj, hideMonths) => {
    if (hideMonths) {
      for (var month in indexYearObj) {
        return (
          <div
            className='monthRow'
            key={hash({ year: month })}
          >
            <div
              onClick={e => {
                e.stopPropagation()

                if (!indexBools[year][month]) {
                  var obj = {...indexBools}
                  obj[year][month] = true
                  setIndexBools(indexBools = obj)
                } else {
                  var obj = {...indexBools}
                  obj[year][month] = false
                  setIndexBools(indexBools = obj)
                }
              }}
            >
              {month}
            </div>

            {handlePostRows(month, indexYearObj, indexBools[year][month])}

          </div>
        )
      }
    } else {
      return <React.Fragment/>
    }
  }

  const handleDD = () => {
    for (var year in copy.indexDDObj) {
      return (
        <div
          key={year}
          onClick={() => {
            if (!indexBools['years'][year]) {
              var obj = {...indexBools}
              obj['years'][year] = true
              setIndexBools(indexBools = obj)
            } else {
              var obj = {...indexBools}
              obj['years'][year] = false
              setIndexBools(indexBools = obj)
            }
          }}
        >
          <div
            className='yearRow'
          >
            {year}
          </div>

          {handleMonthRows(year, copy.indexDDObj[year], indexBools['years'][year])}

        </div>
      )
    }
  }

  if (indexShow && !dashboardFeed) {
    return (
      <div
        className='indexDDContainer'
      >

        {handleDD(setIndexBools, indexBools)}

      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default IndexDD;
