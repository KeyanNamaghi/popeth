import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { TimelineElement } from './TimelineElement'
import './Experience.css'

const descriptions = {
  CHUI: (
    <ul>
      <li>Took ownership of the new home delivery page.</li>
      <li>Worked on credit application within the checkout page.</li>
      <li>Implemented several new ways of working from previous teams.</li>
    </ul>
  ),
  SmartShop: (
    <ul>
      <li>
        Predominantly worked on implementing the migration from using SmartShop’s own Identity solution to a Sainsbury's
        wide one without disruption to customers.
      </li>
      <li>Operated primarily as a backend Golang engineer but also covered iOS and Android development.</li>
    </ul>
  ),
  Payments: (
    <ul>
      <li>Java backend development mainly within the Argos team then later alongside the Sainsburys team.</li>
      <li>Facilitating merging with the Argos and Sainsburys teams.</li>
      <li>Supported the completion of a payment orchestrator which all other services would be called through.</li>
    </ul>
  ),
  PDP: (
    <ul>
      <li>Worked as a frontend React developer on the Argos product page.</li>
      <li>Implemented a complete reworking of the reviews section on the page.</li>
      <li>Contributed to the Argos shared component library with a brand new progress bar component.</li>
      <li>Intoduced the use of Cypress testing and Storybook.</li>
    </ul>
  ),
  Imperial: (
    <ul>
      <li>
        Final Year Individual Project – Virtual Reality Graph Visualisation
        <ul>
          <li>Explored using an Oculus Rift to visualise and interact with graphs composed of vertices and edges.</li>
          <li>
            Built a working application in Unity (C#) that was able to demonstrate the concept by utilising a modern
            efficient force directed layout algorithm.
          </li>
        </ul>
      </li>
      <li>
        Third Year University Group Project – Climate Edge Application and Sensor
        <ul>
          <li>
            Developed an Android application to log and plot graphically data from a microprocessor sent via Bluetooth.
          </li>
          <li>
            Designed and manufactured a new rain sensor and began training a model via matlab to calculate rainfall
          </li>
        </ul>
      </li>
    </ul>
  )
}

export const Experience = () => (
  <div className="experience__container">
    <VerticalTimeline className="experience__timeline" animate={false}>
      <TimelineElement
        title="Argos Checkout UI"
        subtitle="Front End Engineer [C4]"
        date="May 2021 - Present"
        description={descriptions.CHUI}
        colour="#D42114"
      />
      <TimelineElement
        title="SmartShop"
        subtitle="Associate Software Engineer [C3]"
        date="Dec 2020 – May 2021"
        description={descriptions.SmartShop}
        colour="#F06C00"
      />
      <TimelineElement
        title="Payments"
        subtitle="Associate Software Engineer [C3]"
        description={descriptions.Payments}
        date="May 2020 – Dec 2020"
        colour="#D42114"
        gradient="linear-gradient(to right, #D42114 0%,#D42114 50%,#D42114 50%,#F06C00 50%,#F06C00 100%)"
      />
      <TimelineElement
        title="Argos Product Display Page"
        subtitle="Graduate Software Development Engineer [C2]"
        date="Sep 2019 – May 2020"
        description={descriptions.PDP}
        colour="#D42114"
      />
      <TimelineElement
        title="Imperial College London"
        subtitle="Electrical and Electronic Engineering MEng (2:1)"
        date="Sep 2013 - Oct 2018"
        description={descriptions.Imperial}
        colour="#012146"
      />
    </VerticalTimeline>
  </div>
)
