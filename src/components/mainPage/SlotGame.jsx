import React from 'react'
import SlotJackpot from '../../images/slot_jackpot.gif'
import Type1Bg from '../../images/type_1_bg.png'
import Slot1 from '../../images/slot1.png'
import Slot2 from '../../images/slot2.png'
import Slot3 from '../../images/slot3.png'
import Slot4 from '../../images/slot4.png'
import Slot5 from '../../images/slot5.png'

const SlotGame = () => {

  const CardType1 = ({ image, text, isNew }) => (
    <button style={{ width: '179px', height: '210px' }} className='relative flex flex-col items-center justify-between filter hover:brightness-125'>
      <div style={{ width: '161px', height: '161px' }} className="relative z-20 flex">
        <img style={{ width: '161px', height: '161px' }} src={image} alt="" className='object-none mt-6px' />
        <div style={{ borderRadius: '2px', background: isNew ? 'linear-gradient(to bottom, #28a0e1, #1949ab)' : 'linear-gradient(to bottom, #f1593b, #bb201f)', boxShadow: isNew ? '0 2px 3px #13269190' : '0 2px 3px #bb201f90' }} className='absolute w-35px h-18px bg-red-400 z-20 top-8px left-2px flex items-center justify-center'>
          <p style={{ fontSize: '10px', color: '#fff' }} className="font-spoqaMedium pt-px">{isNew ? "NEW" : "HOT"}</p>
        </div>
      </div>
      <p style={{ color: '#929292', width: '150px', textOverflow: 'unset', overflow: 'hidden', whiteSpace: 'nowrap', alignContent: 'end', verticalAlign: 'middle' }} className='z-20 mb-16px text-14px font-spoqa w-full'>
        {text.length > 19 ? `${text.slice(0, 19)}...` : text}
      </p>
      <img src={Type1Bg} alt="bg" className='absolute' />
    </button>
  )

	const username = "마이프로틴화이팅예시길이추가닉네임"
  const CardType2 = ({ icon, game }) => (
    <button style={{ width: '303px' }} className="h-full flex items-center pl-10px flex-shrink-0 filter hover:brightness-125">
      <div style={{ width: '62px', height: '62px', borderRadius: '3px', borderWidth: '1px', borderColor: '#413d36' }} className="bg-gray-500">
        <img src={icon} alt="" className='object-cover' />
      </div>

      <div style={{ color: '#6f6f6f' }} className="ml-8px text-14px font-spoqa tracking-tighter pt-2px" >
        <div className='flex space-x-2px h-14px items-center'>
          <p style={{maxWidth:'160px', color: '#929292', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden' }} className="text-14px font-spoqaMedium">{username.length > 12 ? `${username.slice(0,12)}...` : username}</p>
          <p className="text-14px font-spoqa">님이</p>
        </div>
        <p className='h-14px mt-4px flex items-center'>
          <p style={{maxWidth:'138px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden' }} className="text-14px">{game.length > 19 ? `${game.slice(0, 19)}...` : game}</p>
          <p className="text-14px font-spoqa">에서 우승</p>
        </p>

        <p style={{ color: '#bda26f' }} className='h-18px font-spoqaMedium text-18px mt-10px flex items-center'>₩123,456,789</p>
      </div>
    </button>
  )

  return (
    <div style={{ width: '1260px', height: '327px' }}>
      <div style={{ height: '20px' }} className="flex w-full justify-end items-center">
        <button style={{ color: '#ad9e8c', fontSize: '14px' }} className="font-spoqaMedium filter hover:brightness-125 h-14px flex items-center pb-4px">더보기</button>
      </div>

      <div style={{ height: '306px' }} className="flex flex-col justify-between">
        <div className="flex items-start">
          <div className='mr-5px flex-shrink-0 relative flex justify-center'>
            <img src={SlotJackpot} alt="" className='object-none' />
            <div
              style={{ background: '-webkit-linear-gradient(#5a4a29, #fcefad, #5a4a29)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '30px', letterSpacing: '0.1rem', bottom: '41px' }}
              className='absolute z-30 text-white font-spoqaBold'>₩1,234,567,890</div>
          </div>
          <div className='flex space-x-2px'>
            <CardType1 image={Slot1} text="Titan Thunder Wrath example" />
            <CardType1 image={Slot2} text="Space Man" />
            <CardType1 image={Slot3} text="The Tweety House" />
            <CardType1 isNew image={Slot4} text="Crown of Valor" />
            <CardType1 isNew image={Slot5} text="Wild West Gold" />
          </div>
        </div>

        <div style={{ height: '82px', backgroundColor: '#262422', borderRadius: '5px' }} className="w-full flex overflow-hidden relative">
          <div id="slotgame" className='flex w-full'>
            <CardType2 icon={Slot1} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot1} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot1} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot1} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
            <CardType2 icon={Slot4} game="Titan Thunder Wrath example" />
          </div>


          <div style={{ width: '40px', height: '82px', background: 'linear-gradient(to right, #26242220, #262422)' }} className='absolute right-0'></div>
        </div>

      </div>

    </div>
  )
}

export default SlotGame