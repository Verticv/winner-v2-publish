import React from 'react'
import TabBg from '../../images/tab_bg.png'
import Left from '../../images/deco_left.png'
import Right from '../../images/deco_right.png'
import Tab1 from '../../images/tabs/1.png'
import Tab2 from '../../images/tabs/2.png'
import Tab3 from '../../images/tabs/3.png'
import Tab4 from '../../images/tabs/4.png'
import Tab5 from '../../images/tabs/5.png'
import Tab6 from '../../images/tabs/6.png'
import Tab7 from '../../images/tabs/7.png'
import Tab8 from '../../images/tabs/8.png'
import Tab9 from '../../images/tabs/9.png'
import Tab10 from '../../images/tabs/10.png'

const Tabs = () => {

  const SingleTab = ({ title, icon }) => (
    <button style={{width:'115px', height:'109px'}} className='relative flex flex-col items-center justify-between pb-24px hover:brightness-125 filter'>
      <img src={icon} alt="icon1" className='object-none z-20' style={{marginTop:'15px'}} />
      <h2 style={{color:'#252525', fontSize:'14px', marginBottom:'-2px', WebkitTextStroke:'0.2px'}} className='tracking-tighter z-20 font-spoqaBold'>{title}</h2>
      <img src={TabBg} alt="bg" className='object-none absolute' />
    </button>
  )
  return (
    <div style={{width:'1260px'}} className="flex justify-center items-center">
      <img src={Left} className="object-none -mr-5px mb-8px" alt="" />
      <SingleTab title="마이페이지" icon={Tab1} />
      <SingleTab title="공지사항" icon={Tab2} />
      <SingleTab title="게시판" icon={Tab3} />
      <SingleTab title="문의하기" icon={Tab4}/>
      <SingleTab title="충전하기" icon={Tab5} />
      <SingleTab title="환전하기" icon={Tab6} />
      <SingleTab title="포인트전환" icon={Tab7} />
      <SingleTab title="경기결과" icon={Tab8} />
      <SingleTab title="출석부" icon={Tab9} />
      <SingleTab title="라이브영상" icon={Tab10} />
      <img src={Right} className="object-none -ml-5px mb-8px" alt="" />
    </div>
  )
}

export default Tabs