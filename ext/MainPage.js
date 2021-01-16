import React, { useState } from 'react'

import getHabits from '@wasp/queries/getHabits'
import getDatesByMonth from '@wasp/queries/getDatesByMonth'
import getHabitDatesByMonth from '@wasp/queries/getHabitDatesByMonth'
import createHabitDate from '@wasp/actions/createHabitDate'
import createNewDate from '@wasp/actions/createNewDate'
import { useQuery } from '@wasp/queries'

const MainPage = () => {
  const { data: dates, isFetching1, error1 } = useQuery(getDatesByMonth, { month: "2021-01" })
  const { data: habits, isFetching2, error2 } = useQuery(getHabits)
  const { data: habitDates, isFetching, error } = useQuery(getHabitDatesByMonth, { month: "2021-01" })
  if (habits && dates && habitDates) {
    return (
      <div>
        <NewHabitForm />
        <button>Add new day</button>
        <table>
          <tbody>
            <tr key="habits">
              <td/>
              {habits.map(({ name }) => {
                return (
                  <td>{name}</td>
                )
              })}
            </tr>
            {dates.map(({ at }) => {
              return (
                <tr key={at.substring(0, 10)}>
                  <td>{at.substring(0, 10)}</td>
                  {habitDates.map(({ dateAt, finished }) => {
                    if (dateAt.substring(0, 10) === at.substring(0, 10)) {
                      return (
                        <td><input type="checkbox" checked={finished} /></td>
                      )
                    }
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>No habits</p>
      </div>
    )
  }
}

const NewHabitForm = (props) => {
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (name.length > 0) {
        await createHabitDate({ name })
        setName('')
      } else {
        window.alert('Error: Habit must have a name')
      }
    } catch (err) {
      window.alert('Error: ' + err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input type='submit' value='Create habit' />
    </form>
  )
}

export default MainPage
