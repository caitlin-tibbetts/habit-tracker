import React, { useState } from 'react'

import getHabits from '@wasp/queries/getHabits'
import getDates from '@wasp/queries/getDates'
import createHabit from '@wasp/actions/createHabit'
import { useQuery } from '@wasp/queries'

const MainPage = () => {
  const { data: habits, isFetching, error } = useQuery(getHabits)
  const { data: dates, isFetching1, error1 } = useQuery(getDates, {habitId: 1})
  console.log(dates)

  if (habits && habits.length > 0) {
    return (
      <div>
        <NewHabitForm />
        {habits.map(({ id, name }) => {

          return (
            <p>{id} {name}</p>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>
        <NewHabitForm />
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
      await createHabit({ name })
      setName('')
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
