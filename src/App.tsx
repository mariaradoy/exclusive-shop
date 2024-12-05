
import './App.css'
import { Wrapper } from './components/wrapper'

function App() {
  return (
    <>
      <div className='h-12 bg-black text-white'>
        <Wrapper>
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center'>
              <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
              <a href="#" className="underline ml-2">ShopNow</a>
            </div>

            <span>English</span>
          </div>
        </Wrapper>
      </div>

      <div className='border-b border-b-black'>
        <Wrapper>
          <div className='h-24 flex items-center justify-between '>
            <div className='text-2xl font-bold text-black'>
              <a href="#">Exclusive</a>
            </div>

            <ul className='flex gap-x-8'>
              <li>
                <a href="#" className='hover:underline underline-offset-1'>Home</a>
              </li>
              <li>
                <a href="#" className='hover:underline underline-offset-1'>Contact</a>
              </li>
              <li>
                <a href="#" className='hover:underline underline-offset-1'>About</a>
              </li>
              <li>
                <a href="#" className='hover:underline underline-offset-1'>Sign Up</a>
              </li>
            </ul>

            <div className='flex gap-x-2'>
              <div>
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className='w-full border-none bg-slate-100 px-4'
                />
              </div>
              <p>Wishlist</p>
              <p>Shopping card</p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default App
