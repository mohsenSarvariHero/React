import React from 'react'
import '@styles/globals.css'
import Nav from '@componenets/Nav'
import Provider from '@componenets/Provider'

export const metadata = {
    title : "Prompttopia",
    description : 'Discover $ Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
       <body>
        <Provider >
                  <div className='main'>
            <div className="gradient" />
        </div>
        <main className="app">
        <Nav />
            {children}
        </main>
        </Provider>

       </body>
    </html>
  )
}

export default RootLayout
