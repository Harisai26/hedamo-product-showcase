import React from 'react'

const DetailCard = ({title, children, icon}) => (
  <div className='detail-card'>
    <div className='detail-card-header'>
      {icon}
      <h3 className='detail-card-title'>{title}</h3>
    </div>
    <div className='detail-card-body'>{children}</div>
  </div>
)

export default DetailCard
