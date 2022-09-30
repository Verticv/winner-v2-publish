import React from 'react'
import { useHistory } from 'react-router';

const ExampleArray = [
    {
        id: 0,
        type: "스포츠북",
        title: "농구[쿼터] / 배구[세트] 스페셜 규정",
        isNew: true,
        time: "2021.06.29"
    },
    {
        id: 1,
        type: "스포츠북",
        title: "야구스포츠 스페셜 규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 2,
        type: "스포츠북",
        title: "예비 도메인 안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 3,
        type: "기타",
        title: "은행별 점검시간안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 4,
        type: "기타",
        title: "스포츠 종목별 규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 5,
        type: "스포츠북",
        title: "미니게임 통합규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 6,
        type: "미니게임",
        title: "스포츠게임 관련규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 7,
        type: "카지노",
        title: "에볼루션카지노 이용안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 8,
        type: "스포츠북",
        title: "라이브 베팅 기본규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 9,
        type: "스포츠북",
        title: "핸디캡의 이해",
        isNew: false,
        time: "2021.06.29"
    },
    
]

const AnnouncementTable = () => {

    const history = useHistory();

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{backgroundColor: item.id % 2 === 0 ? "#323232" : "#2e2e2e"}} 
                className="text-14px tracking-tight text-gray-c8c8c8 h-55px w-full border-b border-gray-252525 group pt-px last:border-b-0"
            >
                <td style={{width: "173px",color: "#4a90f0"}} className="h-56px text-center text-blue-r0056a6 ">{item.type}</td>
                <td  style={{width: "710px"}} className="group w-full h-56px flex items-center space-x-10px">
                    <p style={{maxWidth: '700'}} className="group-hover:text-gray-f1e9e9 truncate">{item.title}</p>
                    {item.isNew && (
                        <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto pr-px flex-shrink-0">
                            N
                        </div>
                    )}
                </td>
                <td style={{width: "111px"}} className="w-full text-center pr-60px font-spoqa">{item.time}</td>
            </tr>
        ));
    }

  return (
      <div className="shadow-table w-full overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        >
        <table className="w-full bg-gray-323232 rounded-4px overflow-hidden">
            <thead className="bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-54px border-b border-gray-252525 pt-px">
                <tr>
                    <td style={{width: "173px"}} className="text-center">구분</td>
                    <td style={{width: "698px"}} className="w-full text-center pr-44px">제목</td>
                    <td style={{width: "111px"}} className="w-full text-center pr-60px">등록일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium cursor-pointer" onClick={() => history.push('/cscenter/announcement/view')}>
                <Cells items={ExampleArray} />
            </tbody>
        </table>  
      </div>
    )
}

export default AnnouncementTable
