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
  
  const handleMonthRows = (
    year, 
    indexMonthObj, 
    hideMonths, 
    indexBools, 
    setIndexBools
  ) => {
    var keys = Object.keys(indexMonthObj)

    if (hideMonths) {
      return (
        <React.Fragment>
          {keys.map(month => {
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
                      var obj2 = {...indexBools}
                      obj2[year][month] = false
                      setIndexBools(indexBools = obj2)
                    }
                  }}
                >
                  {month}
                </div>
    
                {handlePostRows(month, indexMonthObj, indexBools[year][month])}
    
              </div>
            )
          })}
        </React.Fragment>
      )

      // for (let month in indexMonthObj) {
      //   return (
      //     <div
      //       className='monthRow'
      //       key={hash({ year: month })}
      //     >
      //       <div
      //         onClick={e => {
      //           e.stopPropagation()

      //           if (!indexBools[year][month]) {
      //             var obj = {...indexBools}
      //             obj[year][month] = true
      //             setIndexBools(indexBools = obj)
      //           } else {
      //             var obj2 = {...indexBools}
      //             obj2[year][month] = false
      //             setIndexBools(indexBools = obj2)
      //           }
      //         }}
      //       >
      //         {month}
      //       </div>

      //       {handlePostRows(month, indexMonthObj, indexBools[year][month])}

      //     </div>
      //   )
      // }
    } else {
      return <React.Fragment/>
    }
  }

  const handleDD = (indexBools, setIndexBools, copy) => {
    var keys = Object.keys(copy.indexDDObj)

    return (
      <React.Fragment>
        {keys.map(year => {
          return (
            <div
              key={year}
              onClick={() => {
                if (!indexBools['years'][year]) {
                  var obj = {...indexBools}
                  obj['years'][year] = true
                  setIndexBools(indexBools = obj)
                } else {
                  var obj2 = {...indexBools}
                  obj2['years'][year] = false
                  setIndexBools(indexBools = obj2)
                }
              }}
            >
              <div
                className='yearRow'
              >
                {year}
              </div>

              {
                handleMonthRows(
                  year, 
                  copy.indexDDObj[year],
                  indexBools['years'][year], 
                  indexBools, 
                  setIndexBools
                )
              }

            </div>
          )
        })}
      </React.Fragment>
    )

    // for (let year in copy.indexDDObj) {
    //   return (
    //     <div
    //       key={year}
    //       onClick={() => {
    //         if (!indexBools['years'][year]) {
    //           var obj = {...indexBools}
    //           obj['years'][year] = true
    //           setIndexBools(indexBools = obj)
    //         } else {
    //           var obj2 = {...indexBools}
    //           obj2['years'][year] = false
    //           setIndexBools(indexBools = obj2)
    //         }
    //       }}
    //     >
    //       <div
    //         className='yearRow'
    //       >
    //         {year}
    //       </div>

    //       {
    //         handleMonthRows(
    //           year, 
    //           copy.indexDDObj[year],
    //           indexBools['years'][year], 
    //           indexBools, 
    //           setIndexBools
    //         )
    //       }

    //     </div>
    //   )
    // }
  }
  console.log(copy)
  if (indexShow && !dashboardFeed) {
    return (
      <div
        className='indexDDContainer'
      >

        {handleDD(indexBools, setIndexBools, copy)}

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
