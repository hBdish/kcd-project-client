import React from 'react'

const ProgressBar = ({ bgcolor, textColor, fontSize, completed }) => {
  const containerStyles = {
    height: 25,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    //margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: textColor || 'white',
    fontWeight: 'bold',
    fontSize: fontSize,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
