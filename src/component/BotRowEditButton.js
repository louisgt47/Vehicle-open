import React from 'react'
import { Button } from 'react-bootstrap'
class BotRowEditButton extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Button type="submit" variant="secondary">
          完成編輯
        </Button>
        {/* <button className="ShopButton">完成編輯</button> */}
      </>
    )
  }
}

export default BotRowEditButton
