import HorizontalMenu2 from 'components/horizontalMenus/HorizontalMenu2'
import React, { useEffect, useState } from 'react'
import Cart from '../../images/betCombination/cart.png'
import CartHighlight from '../../images/betCombination/cart_highlight.png'
import History from '../../images/betCombination/history.png'
import HistoryHighlight from '../../images/betCombination/history_highlight.png'
import TrashIcon from '../../images/betCombination/trash.png'
import LockIcon from '../../images/betCombination/lock.png'
import LockIconOn from '../../images/betCombination/lock_on.png'
import RefrshIcon from '../../images/betCombination/refresh.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"
import BetCombinationRightPanelCart from './BetCombinationRightPanelCart'
import BetCombinationRightPanelHistory from './BetCombinationRightPanelHistory'

const BetCombinationRightPanel = ({
    addedCard, 
    setAddedCard, 
    isPanelFixed, 
    setPanelFixed
}) => {

    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2 },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2 }
    ];

    const dateFormat = "yyyy-MM-dd (eee)"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [selectedTab, setSelectedTab] = useState(0)

    return (
      <div className="w-full rounded-4px shadow-table overflow-hidden p-px"
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
        <div className="rounded-3px overflow-hidden">
          <div style={{boxShadow:"0 2px 2px 0.5px #00000040"}} className="relative bg-gradient-to-b from-gray-545452 to-gray-323231 h-54px w-full z-20 rounded-t-3px flex items-center justify-between pl-8px pr-9px">
              <div className="flex flex-col space-y-2px mt-px">
                  <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-ccc2b6">{format(time, dateFormat, { locale : ko })}</div>
                  <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-blue-4c98ff">{format(time, dateFormat1, { locale : ko })}</div>
              </div>

              <div className="flex space-x-4px">
                  <button 
                      style={{width: "36px", height: "36px",background: "linear-gradient(to bottom, #e8b888, #4b3b09)" }} 
                      className="rounded-4px  flex items-center justify-center hover:brightness-125 filter shadow-link"
                      onClick={() => setAddedCard([])}
                  >
                      <div style={{width: "34px", height: "34px",background: "linear-gradient(to bottom, #a67c52, #7f5f3f)"}} className="rounded-4px flex items-center justify-center">
                          <img src={TrashIcon} alt="" />
                      </div>
                  </button>
                  <button 
                      onClick={() => setPanelFixed(!isPanelFixed)} 
                      style={{width: "36px", height: "36px",background: "linear-gradient(to bottom, #e8b888, #4b3b09)"}} 
                      className="rounded-4px flex items-center justify-center hover:brightness-125 filter shadow-link"
                  >
                      <div style={{width: "34px", height: "34px",background: "linear-gradient(to bottom, #a67c52, #7f5f3f)"}} className="rounded-4px flex items-center justify-center -mt-px">
                          <img src={isPanelFixed ? LockIconOn : LockIcon} alt="" />
                      </div>
                  </button>
                  <button 
                      style={{width: "36px", height: "36px",background: "linear-gradient(to bottom, #e8b888, #4b3b09)"}} 
                      className="rounded-4px flex items-center justify-center hover:brightness-125 filter shadow-link"
                  >
                      <div style={{width: "34px", height: "34px",background: "linear-gradient(to bottom, #a67c52, #7f5f3f)"}} className="rounded-4px flex items-center justify-center">
                          <img src={RefrshIcon} alt="" />
                      </div>
                  </button>
              </div>
              
          </div>

          <div className="bg-gray-262626 pt-7px px-3px flex flex-col">
              <HorizontalMenu2 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
              <div className="mb-5px"></div>
          </div>

          {selectedTab === 0 ? (
              <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />
          ) : (
              <BetCombinationRightPanelHistory />
          )}
      </div>
    </div>
    )
}

export default BetCombinationRightPanel
