import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

export const TimelineElement = ({
  title,
  subtitle,
  date,
  description,
  colour = 'rgb(33, 150, 243)',
  gradient = colour
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        borderTop: `3px solid ${colour}`,
        boxShadow:
          '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
      }}
      contentArrowStyle={{ borderRight: `7px solid ${colour}` }}
      date={date}
      iconStyle={{
        background: gradient,
        color: '#fff',
        boxShadow:
          '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
      }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <div className="experience__list">{description}</div>
    </VerticalTimelineElement>
  )
}
