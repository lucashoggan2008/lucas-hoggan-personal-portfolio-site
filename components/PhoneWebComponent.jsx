import React from 'react'

const PhoneWebComponent = ({PhoneComponent, WebComponent}) => {
    
    return (
    <div>
        <div className="phone-component">{PhoneComponent}</div>
        <div className="web-component">{WebComponent}</div>
    </div>
  )
}

export default PhoneWebComponent