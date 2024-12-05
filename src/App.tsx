
import './App.css'

function App() {


  return (
    <>
      <div className='h-12 bg-black text-white flex items-center justify-center space-x-2 relative'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
        <a href="#" className="underline">ShopNow</a>
        <p className='absolute right-32 mr-5'>English</p>
      </div>

      <div className='h-24 flex items-center justify-between mx-36'>
        <div className='text-2xl font-bold text-black'>
          <a href="#">Exclusive</a>
        </div>

        <div className='flex space-x-8'>
          <a href="#" className='hover:underline'>Home</a>
          <a href="#" className='hover:underline'>Contact</a>
          <a href="#" className='hover:underline'>About</a>
          <a href="#" className='hover:underline'>Sign Up</a>
        </div>

        <div className='flex space-x-2'>
          <div>
            <input type="search" placeholder="What are you looking for?" className='w-full border-none bg-slate-100 px-4 ' />
          </div>
          <p>Wishlist</p>
          <p>Shopping card</p>
        </div>

      </div>

      <hr />
      
    </>
  )
}

export default App
