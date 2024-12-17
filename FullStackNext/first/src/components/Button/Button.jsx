<<<<<<< HEAD
import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'
const Button = ({text , url}) => {
  return (
    <Link href={url} >
        <button className={styles.container}>
            {text}
        </button>
    </Link>
  )
}

export default Button
=======
import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'
const Button = ({text , url}) => {
  return (
    <Link href={url} >
        <button className={styles.container}>
            {text}
        </button>
    </Link>
  )
}

export default Button
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
