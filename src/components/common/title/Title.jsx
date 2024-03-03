import React from 'react'

const Title = ({subtitle, title}) => {
  return (
    <div>
        <div id='heading'>
            <h3>{subtitle}</h3>
            <h1 style={{fontSize:'40px'}}>{title}</h1>
        </div>
    </div>
  )
}

export default Title