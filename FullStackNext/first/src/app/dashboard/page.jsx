<<<<<<< HEAD
"use client"
import useSWR from 'swr'
import React from 'react'
import styles from "./dashboard.module.css"
const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  console.log(data)
  return (
    <div className={styles.container}>
      dashboar
=======
import React from 'react'
import style from "./dashboard.module.css"
const Dashboard = () => {
  return (
    <div className={style.container}>
        this the dashboard page
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
    </div>
  )
}

export default Dashboard
<<<<<<< HEAD

=======
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
