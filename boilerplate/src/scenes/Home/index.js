import React from 'react'
import { logout } from 'common/auth'
import { Center } from 'components'

export default class Home extends React.Component {
  render() {
    return (
      <Center>
        <button onClick={logout}>logout</button>
      </Center>
    )
  }
}
