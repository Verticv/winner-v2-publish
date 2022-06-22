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

  const SingleTab = ({iconCss, title, icon }) => (
    <button style={{width:'115px', height:'109px'}} className='relative flex flex-col items-center justify-between pb-24px hover:opacity-90'>
      <img src={icon} alt="icon1" className='object-none z-20' style={{marginTop:iconCss}} />
      <h2 style={{color:'#252525'}} className='tracking-tighter z-20 font-spoqaBold'>{title}</h2>
      <img src={TabBg} alt="bg" className='object-none absolute' />
    </button>
  )
  return (
    <div style={{width:'1260px'}} className="flex justify-center items-center">
      <img src={Left} className="object-none -mr-3px" alt="" />
      <SingleTab title="마이페이지" icon={Tab1} iconCss="21px" />
      <SingleTab title="공지사항" icon={Tab2} iconCss="18px" />
      <SingleTab title="게시판" icon={Tab3} iconCss="20px" />
      <SingleTab title="문의하기" icon={Tab4} iconCss="18px"/>
      <SingleTab title="충전하기" icon={Tab5} iconCss="18px" />
      <SingleTab title="환전하기" icon={Tab6} iconCss="15px" />
      <SingleTab title="포인트전환" icon={Tab7} iconCss="18px" />
      <SingleTab title="경기결과" icon={Tab8} iconCss="16px" />
      <SingleTab title="출석부" icon={Tab9} iconCss="15px" />
      <SingleTab title="라이브영상" icon={Tab10} iconCss="16px" />
      <img src={Right} className="object-none -ml-3px" alt="" />
    </div>
  )
}

export default Tabs