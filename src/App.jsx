import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import ChatBox from './component/ChatBox'
import OurCourses from './component/OurCourses'
import QuestionsPage from './component/QuestionsPage'
import Fotter from './component/Fotter'

const App = () => {
  return (
    <div>
   <Navbar/>
   <Banner />
   <ChatBox />
   <OurCourses/>
   <QuestionsPage/>
   <Fotter/>

    </div>
  )
}

export default App