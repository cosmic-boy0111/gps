import React from 'react'

import { PieChart } from "react-minimal-pie-chart";
const Chart = ({data}) => {
  return (
    <PieChart
        style={{
            width:'50%',
            overflow : 'visible'
        }}
        data={data}
        // segmentsShift={-1}
        
        // viewBoxSize = {[1,2]}
      />
  )
}

export default Chart