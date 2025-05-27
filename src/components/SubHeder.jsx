import React from 'react'

const SubHeder = () => {
  return (
    <div className="header__actions">
        <div className="header__profile">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User Avatar"
            className="header__avatar"
          />
          <span className="header__username">Alex</span>
        </div>
        <button className="header__add-btn">＋</button>
    </div>
  )
}

export default SubHeder
