import { Wrapper } from "./wrapper";

export function Topheader () {
    return (<div className='h-12 bg-black text-white'>
        <Wrapper>
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center'>
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
            <a href="#" className="underline underline-offset-2 pl-2">ShopNow</a> 
            </div>
            <span className='absolute right-32 mr-5'>English</span>
          </div>
        </Wrapper>
      </div>);
}