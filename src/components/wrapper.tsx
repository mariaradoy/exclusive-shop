import { ReactNode } from "react"

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className='px-[10%] h-full'>{children}</div>
)