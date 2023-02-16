import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightsideBar.css'



const RightsideBar = () => {
  return (
    <div>
      <aside className='right-sidebar'>
        <Widget />
        <WidgetTags />
      </aside>
    </div>
  )
}

export default RightsideBar
