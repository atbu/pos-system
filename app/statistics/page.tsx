"use client"

import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Label, Tooltip, ResponsiveContainer } from 'recharts'
import HomeButton from '../components/HomeButton'

// Gets the set of all orders from the database and returns them as converted JSON.
const getAllOrders = async () => {
  const res = await fetch("http://localhost:3000/api/getAllOrdersByDate", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Gets the set of all tips from the last week from the database and returns them as converted JSON.
const getAllTipsLastWeek = async () => {
  const res = await fetch("http://localhost:3000/api/getAllTipsLastWeek", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Gets the set of all tips from the last week from the database and returns them as converted JSON.
const getAllTipsLastMonth = async () => {
  const res = await fetch("http://localhost:3000/api/getAllTipsLastMonth", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Gets the set of all tip rates calculated inside the API route (last week/last month/all time) and returns them as converted JSON.
const getTipRates = async () => {
  const res = await fetch("http://localhost:3000/api/getTipRates", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Gets the set of all tip rates calculated inside the API route (last week/last month/all time) and returns them as converted JSON.
const getTipAverages = async () => {
  const res = await fetch("http://localhost:3000/api/getTipAverages", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Gets the PIN, total and full name of the employee of the month.
const getEmployeeOfTheMonth = async () => {
  const res = await fetch("http://localhost:3000/api/getEmployeeOfTheMonth", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

const Statistics = async () => {

  // Grabbing data from API routes defined above.
  const allOrders = await getAllOrders()
  const allTipsLastWeek = await getAllTipsLastWeek()
  const allTipsLastMonth = await getAllTipsLastMonth()
  const tipRates = await getTipRates()
  const tipAverages = await getTipAverages()
  const employeeOfTheMonth = await getEmployeeOfTheMonth()
  
  { /* number of orders / total revenue (£) by month (data1) */ }
  let data1 = []
  allOrders.forEach(order => {
    const dateObj = new Date(order.createdAt)
    const monthYearStr = dateObj.toLocaleString('default', { month: "long", year: "numeric" })
    
    let monthObj = data1.filter(month => month.name === monthYearStr)
    if(monthObj.length === 0){
      data1.push({name: monthYearStr, numberOfOrders: 1, total: parseFloat(order.total)})
    } else {
      data1.forEach(month => {
        if(month.name == monthYearStr) {
          month.numberOfOrders += 1
          month.total += parseFloat(order.total)
        }
      })
    }
  })

  { /* total number of orders / total revenue (£) by user (represented by PIN) (all time) */ }
  let data2 = []
  allOrders.forEach(order => {
    const userPIN = order.userPin
    
    let userObj = data2.filter(user => user.pin === userPIN)
    if(userObj.length === 0){
      data2.push({pin: userPIN, numberOfOrders: 1, total: parseFloat(order.total)})
    } else {
      data2.forEach(user => {
        if(user.pin === userPIN) {
          user.numberOfOrders += 1
          user.total += parseFloat(order.total)
        }
      })
    }
  })

  { /* will display in a table of user PIN/total tip value/number of tips for the last week */ }
  let tableData1 = []
  allTipsLastWeek.forEach(tip => {
    const userPIN = tip.user.pin

    let userObj = tableData1.filter(user => user.pin === userPIN)
    if(userObj.length === 0) {
      tableData1.push({pin: userPIN, numberOfTips: 1, total: parseFloat(tip.amount)})
    } else {
      tableData1.forEach(tip => {
        if(tip.pin === userPIN) {
          tip.numberOfTips += 1
          tip.total += parseFloat(tip.amount)
        }
      })
    }
  })

  { /* will display in a table of user PIN/total tip value/number of tips for the last 30 days */ }
  let tableData2 = []
  allTipsLastMonth.forEach(tip => {
    const userPIN = tip.user.pin

    let userObj = tableData2.filter(user => user.pin === userPIN)
    if(userObj.length === 0) {
      tableData2.push({pin: userPIN, numberOfTips: 1, total: parseFloat(tip.amount)})
    } else {
      tableData2.forEach(tip => {
        if(tip.pin === userPIN) {
          tip.numberOfTips += 1
          tip.total += parseFloat(tip.amount)
        }
      })
    }
  })

  /*
  This page will display statistics using data from the database about products,
  dates and times they are sold, orders, etc. using charts and visual methods
  so end users can not only access data but see it and spot patterns.

  Ideally, there will also be a way to export the data, potentially as a CSV file
  or similar so it can be accessed through Excel or similar so users can carry
  out their own statistical analysis on the data. 
  */
  return (
    <div>
      
      <div className="pt-6 text-white">

        { /* number of orders / total revenue (£) by month (data1) */ }
        <ResponsiveContainer width={600} height={400}>
          <BarChart data={data1}>
            <Bar name="Number of Orders" dataKey="numberOfOrders" fill="#8884d8" />
            <Bar name="Total Revenue (£)" dataKey="total" fill="#888d48" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>

        { /* total number of orders / total revenue (£) by user (represented by PIN) (all time) */ }
        <ResponsiveContainer width={600} height={400} className="pt-5">
          <BarChart data={data2}>
            <Bar name="Number of Orders" dataKey="numberOfOrders" fill="#8884d8" />
            <Bar name="Total Revenue (£)" dataKey="total" fill="#888d48" />
            <Tooltip />
            <XAxis dataKey="pin">
              <Label value="User PIN" offset={1} position="insideBottom" />
            </XAxis>
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>

      </div>

      { /* Generates a table with the PIN, number of tips and total revenue for each user that received at least one tip in the last week. */ }
      <>
        <div className="w-1/4 pt-2 pl-4">
          <p className="text-center text-white">Tips in the Last Week</p>
          <table className="table text-white">
            <thead>
              <tr>
                <th>PIN</th>
                <th>Number of Tips</th>
                <th>Total (£)</th>
              </tr>
            </thead>
            <tbody>
              {tableData1.map(user => <tr>
                <td>{user.pin}</td>
                <td>{user.numberOfTips}</td>
                <td>{user.total}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </>

      { /* Generates a table with the PIN, number of tips and total revenue for each user that received at least one tip in the last month. */ }          
      <>
        <div className="w-1/4 pt-2 pl-4">
          <p className="text-center text-white">Tips in the Last Month</p>
          <table className="table text-white">
            <thead>
              <tr>
                <th>PIN</th>
                <th>Number of Tips</th>
                <th>Total (£)</th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map(user => <tr>
                <td>{user.pin}</td>
                <td>{user.numberOfTips}</td>
                <td>{user.total}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </>

      { /* Generates a table with the percentage of orders that contained a tip in the last week, month and all time. */ }
      <>
        <div className="w-1/4 pt-2 pl-4">
          <p className="text-center text-white">Tip Rates</p>
          <table className="table text-white">
            <thead>
              <tr>
                <th>Timeframe</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Week</td>
                <td>{(tipRates.lastWeek * 100).toFixed(2).toString()}</td>
              </tr>
              <tr>
                <td>Last Month</td>
                <td>{(tipRates.lastMonth * 100).toFixed(2).toString()}</td>
              </tr>
              <tr>
                <td>All Time</td>
                <td>{(tipRates.allTime * 100).toFixed(2).toString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>

      { /* Generates a table with the average tip from the last week, month and all time. */ }
      <>
        <div className="w-1/4 pt-2 pl-4">
          <p className="text-center text-white">Tip Averages</p>
          <table className="table text-white">
            <thead>
              <tr>
                <th>Timeframe</th>
                <th>Amount (£)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Week</td>
                <td>{tipAverages.lastWeek}</td>
              </tr>
              <tr>
                <td>Last Month</td>
                <td>{tipAverages.lastMonth}</td>
              </tr>
              <tr>
                <td>All Time</td>
                <td>{tipAverages.allTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>

      { /* Generates a table with the 'employee of the month', i.e. the user who produced the highest amount of revenue in the last month. */ }
      <>
        <div className="w-1/4 pt-2 pl-4">
          <p className="text-center text-white">Employee of the Month</p>
          <table className="table text-white">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Amount (£)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employeeOfTheMonth.fullName}</td>
                <td>{employeeOfTheMonth.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>

      <HomeButton />
    </div>
  )

}

export default Statistics