import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import PointsAccumulateTable from './tables/PointsAccumulateTable'

const PointsAccumulate = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="w-full flex flex-col items-center">
            <MyPageTitle title="포인트적립내역" pointsFor="Louie3" />

            <div className="flex mt-20px h-100px space-x-5px">
                <div className="flex items-center justify-center w-204px rounded-4px h-100px border-2 border-golden-a47b51">
                    <div style={{borderRadius:"8px"}} className="w-200px h-96px bg-gray-272624 pt-21px flex items-center flex-col">
                        <div className="text-golden-89806f font-spoqaMedium text-14px tracking-tight h-13px flex items-center">잔여 포인트</div>
                        <div className="text-30px tracking-tight flex items-center h-23px mt-17px">
                            <span className="font-spoqaBold text-blue-4c98ff">278</span>
                            <span className="font-spoqa text-golden-89806f">P</span>
                        </div>
                    </div>
                </div>

                <div className="pt-21px items-center flex-col flex w-204px rounded-4px h-100px bg-gray-272624 border-2 border-gray-404040">
                    <div className="text-golden-89806f font-spoqaMedium text-14px tracking-tight h-13px flex items-center">당월 적립포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-golden-89806f">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa ">P</span>
                    </div>
                </div>

                <div className="pt-21px items-center flex-col flex w-204px rounded-4px h-100px bg-gray-272624 border-2 border-gray-404040">
                    <div className="text-golden-89806f font-spoqaMedium text-14px tracking-tight h-13px flex items-center">전월 적립포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-golden-89806f">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa ">P</span>
                    </div>
                </div>

                <div className="pt-21px items-center flex-col flex w-204px rounded-4px h-100px bg-gray-272624 border-2 border-gray-404040">
                    <div className="text-golden-89806f font-spoqaMedium text-14px tracking-tight h-13px flex items-center">총 누적포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-golden-89806f">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>

                <div className="pt-21px items-center rounded-4px flex-col flex w-204px h-100px bg-gray-272624 border-2 border-gray-404040">
                    <div className="text-golden-89806f font-spoqaMedium text-14px tracking-tight h-13px flex items-center">총 사용포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-golden-89806f">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <DateSearchBar has3MonthSearch={true} />
            </div>

            <div className="mt-20px">
                <PointsAccumulateTable />
            </div>

            <div className="mt-60px"></div>
            <Pagination page={page} setPage={setPage}/>   

        </div>
    )
}

export default PointsAccumulate
