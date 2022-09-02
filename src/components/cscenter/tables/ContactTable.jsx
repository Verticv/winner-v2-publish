import React from 'react'
import { useHistory } from 'react-router';
import MailIcon from '../../../images/myPage/mail_v2.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened_v2.png'

const ContactTable = ({
    array
}) => {

    const history = useHistory();

    function InboxList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${
                    item.isRead === false ? "bg-brown-r3d3934" :
                    item.id % 2 === 0 ? "bg-gray-323232" : "bg-gray-2e2e2e"
                } font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-55px w-full border-b border-gray-252525 group`}
            >
                <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-c8c8c8 h-55px border-b border-gray-252525 px-54px">        

                    <div 
                        className="w-54px flex justify-center cursor-pointer h-full items-center"
                        onClick={() => history.push(item.path)}
                    >
                        <img className="object-none" src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                    </div>

                    <div 
                        className="w-98px flex justify-center cursor-pointer h-full items-center"
                        onClick={() => history.push(item.path)}
                    >
                        <div 
                            style={{backgroundColor: item.isRead === true ? "#494745" : "#7e7564", color: item.isRead === true ? "#c8c8c8" : "#f1e7d5"}}
                            className={`w-69px h-29px rounded-full font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-px cursor-pointer`} 
                        >
                            <p>{item.isRead === true ? "답변완료" : "답변대기"}</p>
                        </div>
                    </div>

                    <div 
                        className={`${item.isRead === true ? "text-gray-c8c8c8" : "text-gray-c8c8c8"} font-spoqaMedium w-120px  flex justify-center cursor-pointer h-full items-center `}
                        onClick={() => history.push(item.path)}
                    >
                        {item.category}
                    </div>

                    <div 
                        style={{width: "420px"}} 
                        className={`${item.isRead === true ? "text-gray-c8c8c8" : "text-gray-c8c8c8"} font-spoqaMedium flex items-center space-x-10px cursor-pointer h-full ml-24px`}
                        onClick={() => history.push(item.path)}
                    >
                        <p className="">{item.text}</p>
                        {item.isRead === false && (
                            <div className={`w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto ${item.id === 6 && "pr-px"}`}>
                                N
                            </div>
                        )}
                    </div>

                    <div 
                        className={`${item.isRead === true ? "text-gray-c8c8c8" : "text-gray-c8c8c8"} w-138px flex font-spoqa justify-center text-center cursor-pointer h-full items-center`}
                        onClick={() => history.push(item.path)}
                    >
                        {item.time}
                    </div>
                    <div className="ml-33px w-70px flex items-center justify-center">
                        <button className={`${item.isRead === true ? "bg-gray-5c5c5c" : "bg-red-c65337" } w-49px h-29px flex justify-center rounded-4px text-white font-spoqaMedium items-center pt-2px hover:opacity-75 shadow-plain10`}>
                            삭제
                        </button>
                    </div>
                    
                </div>
            </div>
        ));
    }

  return (
      
        <div className="shadow-table w-full overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        >
          <div  className="w-full bg-gray-323232 rounded-4px overflow-hidden">
            <div className="flex items-center bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-gray-252525 px-52px">        
                <div className="w-54px flex justify-center">확인</div>
                <div className="w-98px flex justify-center">상태</div>
                <div className="w-120px flex justify-center">구분</div>
                <div style={{width: "420px"}} className="flex justify-center">제목</div>
                <div className="w-138px flex justify-center">등록일시</div>
                <div className="ml-33px w-70px flex justify-center">삭제</div>
            </div>

            <InboxList items={array} />
        </div>
      </div>
    )
}

export default ContactTable
