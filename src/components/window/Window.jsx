import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { ResizableBox } from 'react-resizable'
import { Route, Switch, useLocation } from 'react-router'
import { getFullscreenState } from '../../selectors/window'
import { Header } from '../header/Header'
import './Window.css'

export const Window = () => {
  const { pathname } = useLocation()
  const fullscreen = useSelector(getFullscreenState)
  const [dragging, setDragging] = useState(false)
  const [resizing, setResizing] = useState(false)
  const [posX, setPosX] = useState(0.5 * (window.innerWidth - 0.75 * window.innerWidth))
  const [posY, setPosY] = useState(0.5 * (window.innerHeight - 0.75 * window.innerHeight))
  const [sizeX, setSizeX] = useState(fullscreen ? window.innerWidth - 4 : 0.75 * window.innerWidth)
  const [sizeY, setSizeY] = useState(fullscreen ? window.innerHeight - 34 : 0.75 * window.innerHeight)

  const fullscreenCSS = fullscreen ? 'window__container--fullscreen' : ''

  const handleOnStop = (_, data) => {
    setDragging(false)
    setPosX(data.x)
    setPosY(data.y)
  }

  const handleResize = (_, data) => {
    setResizing(false)
    setSizeX(data.size.width)
    setSizeY(data.size.height)
  }

  return (
    <Draggable
      handle=".window__header"
      disabled={fullscreen}
      position={fullscreen ? { x: 0, y: 0 } : { x: posX, y: posY }}
      onStart={() => setDragging(true)}
      onStop={handleOnStop}
      defaultPosition={{ x: posX, y: posY }}
    >
      <div className={`window__container ${fullscreenCSS} ${dragging ? '' : 'window__container--not-dragging'}`}>
        <Header className={fullscreenCSS} />
        <ResizableBox
          className={`${resizing ? '' : 'window__resizable--auto'}`}
          width={!fullscreen ? sizeX : window.innerWidth - 4}
          height={!fullscreen ? sizeY : window.innerHeight - 34}
          handle={<span className="window__handle" />}
          onResizeStart={() => setResizing(true)}
          onResizeStop={handleResize}
          handleSize={[8, 8]}
          minConstraints={[320, 320]}
        >
          <div className={`window__body`}>
            <Switch>
              <Route path="/help" render={() => <div>Help</div>}></Route>
              <Route path="/" render={() => <div>Match</div>}></Route>
            </Switch>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  )
}
