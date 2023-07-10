import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [time, settime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      settime(new Date());
    },1000)
    return () => clearInterval(id)
  },[])


  return (
    <H1>
      <h3>오늘은 📅</h3>
      <h1>{time.toDateString()}</h1>
    </H1>
  )
}

const H1 = styled.h1`
  font-size : 15px;
  color : #de4e40;
  margin : 0
`

export default Header