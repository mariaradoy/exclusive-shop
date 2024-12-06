
import './App.css'
import { Header } from './components/header'
import { Topheader } from './components/topheader'
import { Wrapper } from './components/wrapper'


function App() {
  return (
    <>
      <Topheader />
      <Header />

      <div className='pt-10 flex justify-between'>
        <Wrapper>
          <div>
            Sidebar
          </div> 
          <div>
            Slider
          </div> 
        </Wrapper>  
      </div>   
    </>
  )
}

export default App
