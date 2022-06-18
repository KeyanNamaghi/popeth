import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import { ResizableBox } from 'react-resizable'
import { Redirect, Route, Switch } from 'react-router-dom'
import { getFullscreenState, getShowState } from '../../selectors/window'
import { Header } from '../header/Header'
import { Projects } from '../projects/Projects'
import { Tinder } from '../projects/projectPages/Tinder'
import { Popeth } from '../projects/projectPages/Popeth'
import { Vowels } from '../projects/projectPages/Vowels'
import { Pokedex } from '../projects/projectPages/Pokedex'
import { Experience } from '../experience/Experience'
import { Settings } from '../settings/Settings'
import { Me } from '../me/Me'
import './Window.css'

export const Window = () => {
  const fullscreen = useSelector(getFullscreenState)
  const show = useSelector(getShowState)
  const [dragging, setDragging] = useState(false)
  const [resizing, setResizing] = useState(false)
  const [posX, setPosX] = useState(0.5 * (window.innerWidth - 0.75 * window.innerWidth))
  const [posY, setPosY] = useState(0.5 * (window.innerHeight - 0.75 * window.innerHeight) - 50)
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

  if (!show) return null

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
              <Route path="/me">
                <Me />
              </Route>
              <Route path="/projects/tinder++">
                <Tinder />
              </Route>
              <Route path="/projects/popeth">
                <Popeth />
              </Route>
              <Route path="/projects/vowels">
                <Vowels />
              </Route>
              <Route path="/projects/pokedex">
                <Pokedex />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/contact" render={() => <div>contact</div>}></Route>
              <Route path="/">
                <Redirect to="/me" />
              </Route>
            </Switch>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  )
}
