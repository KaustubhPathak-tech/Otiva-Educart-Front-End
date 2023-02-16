import React from 'react'

const WidgetTag = () => {
  const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'python', 'reactjs']

  return (
    <div>
      <div className="widget-tags">
        <h4>Watched tags</h4>
        <div className="widget-tags-div">
          {
            tags.map((tags) => ( 
              <p key={tags}>{tags}</p>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WidgetTag
