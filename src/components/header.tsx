import { Navbar_item } from "./navbar-item";
import { Wrapper } from "./wrapper";
import Wishlist from "./../assets/Wishlist.svg";

export function Header () {
    return (
        <div className='border-b border-b-slate-400'>
        <Wrapper>        
          <div className='h-[94px] flex items-center justify-between'>
            <div className='text-2xl font-bold text-black'>
              <a href="#">Exclusive</a>
            </div>
            <ul className='flex gap-8'>
              <Navbar_item>
                <a href="#" >Home</a>
              </Navbar_item>
              <Navbar_item>
                <a href="#" >Contact</a>
              </Navbar_item>
              <Navbar_item>
                <a href="#">About</a>
              </Navbar_item>
              <Navbar_item>
                <a href="#">Sign Up</a>
              </Navbar_item>
            </ul>

              <div className='flex gap-2 items-center justify-center'>

                <div className='flex items-center justify-between w-[243px] h-[38px] rounded bg-[#F5F5F5] pr-2'>
                  <input 
                    type="text" 
                    name="search"
                    placeholder="What are you looking for?" 
                    className="w-full h-full bg-transparent px-[20px] placeholder:text-[12px]" />
                  <button className="text-[12px] rounded bg-slate-900 text-white px-2 py-1">
                    Search
                  </button>
                </div>

                <Navbar_item>
                  <a href="#">
                    <img src={Wishlist} alt="Wishlist" />
                  </a>
                </Navbar_item>
                <Navbar_item>
                  <a href="#">Shopping Card</a>
                </Navbar_item>
              </div>
            </div>
        </Wrapper>
      </div>  
    );
}