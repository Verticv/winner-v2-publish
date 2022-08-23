import React from 'react'
import { useHistory } from 'react-router-dom';
import MailIcon from '../../../images/myPage/mail_v2.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened_v2.png'

const InboxTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const history = useHistory();

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function InboxList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${
                    // item.isRead === false
                    // ? "bg-gray-e8eff6" :
                    item.id % 2 === 0 
                    ? "bg-dark-323232" 
                    : "bg-dark-2e2e2e"
              } font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-dark-252525 hover:font-spoqaBold group last:border-b-0`}

            >
                <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-dark-252525 px-54px last:border-b-0">        
                    
                    <div className="-ml-2px w-28px flex justify-center">
                        <input
                            type="checkbox"
                            checked={checkedState[item.id]}
                            onChange={() => handleOnChange(item.id)}
                        />
                    </div>

                    <div className="w-107px flex justify-center cursor-pointer" onClick={() => history.push(item.path)}>
                        <img src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                    </div>

                    <div
                        className={`${
                            item.isRead === true 
                            ? "text-gray-c8c8c8 font-spoqaMedium" 
                            : "text-gray-c8c8c8 font-spoqaMedium"
                            } w-612px flex items-center space-x-10px cursor-pointer`}
                        onClick={() => history.push(item.path)}
                    >
                        {
                            item.type === "안내" 
                            ? <div className="w-45px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px">안내</div> 
                            : item.type === "이벤트" 
                            ? <div className="w-53px h-25px rounded-full bg-yellow-c08029 flex items-center justify-center text-white text-12px">이벤트</div> 
                            : ''
                        }
                        <p className="">{item.text}</p>
                        {item.isRead === false && (
                          <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto">
                              N
                          </div>
                        )}
                    </div>

                    <div className={`${item.isRead === true ? "text-gray-c8c8c8" : "text-gray-c8c8c8"} w-164px flex font-spoqa justify-center text-center`}>{item.time}</div>

                    <button className="w-70px flex items-center justify-center ">
                        <div className={`${item.isRead === true  ? "bg-gray-5c5c5c" : "bg-red-c65337" } w-49px h-29px flex justify-center rounded-4px text-white font-spoqaMedium items-center pt-2px hover:filter hover:brightness-125 `}>
                            삭제
                        </div>
                    </button>
                    
                </div>
            </div>
        ));
    }

  return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-navbar overflow-hidden p-px">
          <div className="rounded-3px overflow-hidden">
              <div className="flex items-center font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-dark-252525 bg-dark-2e2e2e px-54px">        
                  <div className="-ml-2px w-28px flex justify-center">선택</div>
                  <div className="w-107px flex justify-center">확인</div>
                  <div className="flex justify-center -ml-28px" style={{width:'600px'}}>제목</div>
                  <div className="w-164px flex justify-center">보낸시간</div>
                  <div className="w-70px flex justify-center">삭제</div>
              </div>

              <InboxList items={array} />
          </div>
      </div>
    )
}

export default InboxTable
