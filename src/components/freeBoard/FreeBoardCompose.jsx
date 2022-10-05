import SportsBetHistory from 'components/myPage/betHistory/SportsBetHistoryPanel';
import BetHistoryPopup from 'components/popups/BetHistoryPopup';
import PopupControls from 'components/popups/PopupControls';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

const FreeBoardCompose = () => {

    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [attachedArray, setAttachedArray] = useState([]);
    const AttachButton = (
        <button 
            style={{width: "115px", height: "35px", backgroundColor: "#826140",boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.6)'}}
            className="flex items-center justify-center rounded-4px text-golden-highLight text-15px tracking-tight font-spoqaMedium pt-px hover:brightness-125 filter"
        >
            베팅내역첨부
        </button>
    )

    return (
        <div>
          <div className="shadow-table w-full overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        >
            <div  className="w-full bg-gray-323232 rounded-4px overflow-hidden">

              <div className="h-55px w-full bg-gray-2e2e2e border-b border-gray-252525">
                  <input 
                      className="bg-gray-2e2e2e outline-none w-full h-full px-19px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 text-gray-c8c8c8"
                      placeholder="제목을 입력하세요."
                  />
              </div>

              <div className="h-56px w-full bg-gray-2e2e2e border-b border-gray-252525 px-19px flex items-center">

                  <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                      <BetHistoryPopup setPopupOpen={setPopupOpen} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                  </PopupControls> 
                  
              </div>

              {attachedArray.map(id => 
                  <div className="py-20px border-b border-gray-252525 px-30px space-y-28px"> 
                      <SportsBetHistory type={id} id={id} isAttached={true} attachedArray={attachedArray} setAttachedArray={setAttachedArray} isFullPage={true} />
                  </div>
              )}
              

              <div style={{height:"401px"}} className="w-full bg-gray-323232">
                  <textarea 
                      style={{resize: "none"}}
                      className="bg-gray-323232 outline-none w-full h-full  px-19px py-19px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 text-gray-c8c8c8"
                      placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                  />
              </div>
            </div>
          </div>


        <div className="flex w-full items-center justify-center space-x-5px mb-60px mt-20px">
          
              <button onClick={() => history.push("/freeboard")} className="flex items-center justify-center h-52px w-192px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
                  <div className="flex items-center justify-center h-50px w-190px bg-black rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer pt-2px">
                      <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff text-shadow-5">작성하기</span>
                  </div>
              </button>
          <button onClick={() => history.push("/freeboard")} className="flex items-center justify-center w-192px h-52px rounded-4px  shadow-link hover:filter hover:brightness-125"
            style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)' }}>
                <div className="flex items-center justify-center h-50px w-190px rounded-4px cursor-pointer"
                  style={{background: 'linear-gradient(to bottom,  #a67c52, #7f5f3f)'}}>
                      <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-px text-shadow-5">취소하기</span>
                  </div>
              </button>
        </div>
       
            
            
        </div>
    )
}

export default FreeBoardCompose
