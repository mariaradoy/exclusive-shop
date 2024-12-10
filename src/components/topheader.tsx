import { Wrapper } from "./wrapper";


export const Topheader = () => {
  return (<div className='h-12 bg-black text-white'>
    <Wrapper>
      <div className='flex justify-center items-center h-full relative'>
        <div className='flex'>
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
          <a href="#" className="underline underline-offset-2 pl-2">ShopNow</a>
        </div>
        <span className="absolute right-0">English</span>
      </div>
    </Wrapper>
  </div>);
}