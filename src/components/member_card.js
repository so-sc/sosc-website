import React from 'react'

const MemberCard = ({ username, full_name, designation }) => (
  <a
    className="card-link"
    target="_blank"
    href={`https://github.com/${username}`}
  >
    <div className="member-card elevate white-bg">
      <img
        className="profile-pic"
        alt=""
        src={`https://avatars1.githubusercontent.com/${username}?size=100`}
      />

      <div className="member-details">
        <h3 className="name">{full_name}</h3>
        <p className="designation">{designation}</p>
      </div>
    </div>
  </a>
)

export default MemberCard
