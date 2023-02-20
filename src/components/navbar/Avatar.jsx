import React from 'react'
import './Avatar.css'
const Avatar = ({ children, backgroundColor,
    px,py,
    color,
    borderRadius,
    fontSize,
    textAlign, cursor }) => {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        color:color||'black',
        borderRadius,
        fontSize,
        textAlign:'center',
        cursor:cursor||null

    }
    return (
        <div style={style} id="avatarcontent">
            {children}
        </div>
    )
}

export default Avatar
