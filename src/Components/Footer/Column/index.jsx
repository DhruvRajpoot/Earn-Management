import React from 'react'
import { Wrapper, P, Link, Div } from '../../../styles/Footer/Column'

const Column = (props) => {
  return (
    <Wrapper>
      <P>{props.array[0]}</P>
      <Div>
        {props.array.slice(1,).map((ele, index) => {
          return <Link href='/' key={index}>{ele}</Link>
        })}
      </Div>
    </Wrapper>
  )
}

export default Column;