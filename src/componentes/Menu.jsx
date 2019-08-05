import { render } from 'react-dom'
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import './Menu.css'
import { Link } from 'react-router-dom';



function DraggableList({ items }) {
    // Devuelve estilos de ajuste para elementos arrastrados / inactivos
const fn = (order, down, originalIndex, curIndex, y) => index =>
down && index === originalIndex
  ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
  : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

  const order = useRef(items.map((_, index) => index)) //Almacenar indicaciones como referencia local, esto representa el pedido del artículo
  const [springs, setSprings] = useSprings(items.length, fn(order.current)) //Cree springs, cada uno corresponde a un elemento, controlando su transformación, escala, etc.
  console.log(springs);
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    console.log(bind);
    const curIndex = order.current.indexOf(originalIndex)
    
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) //El feed genera nuevos datos de estilo, animarán la vista sin causar un solo render
    if (!down) order.current = newOrder
  })
  return (
    
    <div className="content" style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
          }}
          children= {items[i]} 
        
        />
      ))}
    </div>
  )
}

export default DraggableList
