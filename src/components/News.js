import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  

  render() {
    return (
      <div className='container my-3'>

        <h2>NEWSAXIS-Top Headlines</h2>
        <div className="row">
<div className="col-md-4">
        <NewsItem title="Top Headline 1" description="This is the description for the first top headline." />
        </div>
        <div className="col-md-4">
      <NewsItem title="Top Headline 2" description="This is the description for the second top headline." />
      </div>
      <div className="col-md-4">
      <NewsItem title="Top Headline 3" description="This is the description for the third top headline." />
      </div>
     
      </div>
      </div>
    )
  }
}

export default News
