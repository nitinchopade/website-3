import React, { useState } from 'react'
import stateNavStyle from './state-nav.module.scss'
import {
  TabletDisclosure,
  TabletDisclosureHeader,
  TabletDisclosureContent,
} from '~components/common/tablet-disclosure'

export default ({ stateList }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TabletDisclosure>
      <TabletDisclosureHeader isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className={stateNavStyle.header}>Jump to a state:</h3>
      </TabletDisclosureHeader>
      <TabletDisclosureContent
        isOpen={isOpen}
        className={stateNavStyle.container}
      >
        <ul>
          {stateList.map(state => (
            <li key={state.state}>
              <a href={`#state-${state.state.toLowerCase()}`}>{state.state}</a>
            </li>
          ))}
        </ul>
      </TabletDisclosureContent>
    </TabletDisclosure>
  )
}