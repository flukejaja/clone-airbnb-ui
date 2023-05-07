
import { TfiWorld, TfiAlignJustify } from "react-icons/tfi";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import Category from "../category";
import { useState, useEffect } from 'react';
import { BsMapFill } from "react-icons/bs";
import Map from "../map";
import Item from "../item/item";
import { Dropdown, Space } from "antd";
import 'antd/dist/reset.css';
import { RiMenuAddFill } from "react-icons/ri";
import { Calendar, theme } from 'antd';
import Authpage from "../auth/Authpage";
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};


function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);
    const [changeShow, setChangeShow] = useState(false);
    const [changeNavbar, setChangeNavbar] = useState(false);
    const [arrMap] = useState([{
        continent: 'ที่ไหนก็ได้',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    },
    {
        continent: 'ยุโรป',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    },
    {
        continent: 'ญี่ปุ่น',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    }, {
        continent: 'สหรัฐอเมริกา',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    }, {
        continent: 'เกาหลีใต้',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    }
        , {
        continent: 'ออสเตรเลีย',
        image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
    }]);
    const { token } = theme.useToken();
    const [people, setPeople] = useState([{
        age_range: 'ผู้ใหญ่',
        quantity: 0,
        details: 'อายุ 13 ปีขึ้นไป'
    },
    {
        age_range: 'เด็ก',
        quantity: 0,
        details: 'อายุ 2 - 12 ปี'
    }
        ,
    {
        age_range: 'ทารก',
        quantity: 0,
        details: 'อายุน้อยกว่า 2 ปี'
    }])
    const [showSubNavbar, setShowSubNavbar] = useState(0)
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    const [openModalLogin, setModalLogin] = useState(false)
    const handleOpenModalLogin = () => setModalLogin(!openModalLogin)

    const items = [
        {
            label: <a className="font-bold">ลงทะเบียน</a>,
            key: '0',
            onClick: () => handleOpenModalLogin()
        },
        {
            label: <a>เข้าสู่ระบบ</a>,
            key: '1',
            onClick: () => handleOpenModalLogin()
        },
        {
            type: 'divider',
        },
        {
            label: 'ให้เช่าที่พักกับ Airbnb',
            key: '3',
            className: 'truncate'
        },
        {
            label: 'ช่วยเหลือ',
            key: '4',
        },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handlePlus = (index) => {
        people[index].quantity += 1
        setPeople([...people])
    }
    const handleMinus = (index) => {
        if (people[index].quantity > 0) {
            people[index].quantity -= 1
            setPeople([...people])
        }

    }
    return (
        <div className="flex flex-col  min-h-screen w-screen relative">
            <div className={`sticky top-0 bg-white z-40 h-fit  ${scrollPosition != 0 ? 'border-b shadow-lg ' : ''} `}>
                <div className={` md:flex hidden relative px-20 w-full   justify-between items-center h-auto bg-white text-black py-4  ${!changeNavbar ? 'border-b' : 'border-0'} text-sm`}>
                    <div className="text-red-600 text-4xl w-full">airbnb</div>
                    <div className="flex justify-center  items-center py-2" onClick={() => setChangeNavbar(!changeNavbar)}>
                        <div className={`${changeNavbar ? 'hidden animate' : 'flex animate'} transition-all duration-300  max-w-fit w-[377px] shadow-md  border rounded-full h-full hover:shadow-lg cursor-pointer py-2 justify-center items-center`}>
                            <div className="border-r px-3 font-bold truncate">ที่ไหนก็ได้</div>
                            <div className="border-r px-3 font-bold truncate">สัปดาห์ ทุกเวลา</div>
                            <div className="flex items-center px-3 text-gray-400 space-x-4"><div className="w-4/6 truncate">เพิ่มผู้เข้าพัก</div>
                                <div className="text-white rounded-full h-[30px] w-[32px] bg-[#ff385c] items-center flex justify-center text-lg "><AiOutlineSearch /></div></div>
                        </div>
                        <div className={`${!changeNavbar ? 'hidden animate' : 'flex animate'} space-x-5 items-center transition-all duration-300  max-w-fit w-[377px] h-full cursor-pointer py-2 justify-center `}>
                            <div className="border-b border-transparent hover:border-black transition-all duration-500 px-3 font-bold whitespace-nowrap">ที่พัก</div>
                            <div className="border-b border-transparent hover:border-black transition-all duration-500 px-3 font-bold whitespace-nowrap">เอ็กซ์พีเรียนซ์</div>
                            <div className="border-b border-transparent hover:border-black transition-all duration-500 px-3 font-bold whitespace-nowrap ">เอ็กซ์พีเรียนซ์ออนไลน์</div>
                            <div className="h-[30px] "></div>
                        </div>

                    </div>
                    <div className="flex items-center h-full  w-full justify-end space-x-1" >
                        <div className="font-bold px-3 rounded-full hover:bg-gray-100 py-2 cursor-pointer whitespace-nowrap">ให้เช่าที่พักกับ Airbnb</div>
                        <div className="px-3 rounded-full hover:bg-gray-100 py-2 cursor-pointer"> <TfiWorld /></div>
                        <Dropdown
                            menu={{ items }} trigger={['click']} placement="bottomRight" >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className=" cursor-pointer h-auto py-2 hover:shadow-lg flex items-center justify-center space-x-2 w-auto rounded-full border px-5">
                                        <div className=" text-gray-500"><TfiAlignJustify /></div>
                                        <div className="text-2xl text-gray-500"><BsPersonCircle /></div>
                                    </div>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div className={`${changeNavbar ? 'h-24' : 'h-0'}  shadow-xl px-20 bg-white flex justify-center items-center absolute w-full top-24 inset-x-0  transition-all duration-600`}>
                        {changeNavbar && <div className="relative animate flex justify-center bg-gray-white border w-[44rem] items-center py-auto h-16 rounded-full">
                            <div onClick={() => setShowSubNavbar(1)}
                                className={`${showSubNavbar == 1 && 'bg-white shadow-2xl'} shadow-black w-2/6 flex cursor-pointer flex-col rounded-full justify-center px-5 text-black hover:bg-gray-200  h-full`}>
                                <p>สถานที่</p>
                                <input type="text" className="bg-transparent outline-none" placeholder="บริเวณแผนที่" />
                            </div>
                            <div onClick={() => setShowSubNavbar(2)} className="w-2/6 flex h-full relative cursor-pointer">
                                <div className="w-[50%] flex flex-col rounded-full justify-center px-5 text-black hover:bg-gray-200  h-full">
                                    <p>เช็คอิน</p>
                                    <input type="text" className="bg-transparent outline-none" placeholder="เพิ่มวันที่" />
                                </div>
                                <div className="w-[50%]  flex flex-col rounded-full justify-center px-5 text-black hover:bg-gray-200  h-full">
                                    <p>เช็คเอาท์</p>
                                    <input type="text" className="bg-transparent outline-none" placeholder="เพิ่มวันที่" />
                                </div>

                            </div>
                            <div onClick={() => setShowSubNavbar(3)} className={`transition-all duration-600 ${showSubNavbar == 3 && 'bg-white shadow-2xl pl-10 pr-1'} shadow-black w-2/6 cursor-pointer  flex flex-row rounded-full text-black hover:bg-gray-200 h-full justify-center items-center`}>
                                <div className="flex flex-col w-1/2 ">
                                    <p>ใคร</p>
                                    <input type="text" className="bg-transparent outline-none" placeholder="เพิ่มผู้เข้าพัก" />
                                </div>
                                <div className={`${showSubNavbar == 3 ? 'w-1/2 ' : 'w-fit'}  px-2 text-white rounded-full h-[30px]  bg-[#ff385c] items-center flex justify-center text-lg `}>
                                    <AiOutlineSearch />
                                    {showSubNavbar == 3 && <p className="text-xs ">ค้นหา</p>}
                                </div>
                            </div>
                            {showSubNavbar !== 0 && <div>
                                {showSubNavbar == 1 && <div className="absolute top-20 inset-x-0 bg-white rounded-xl w-[35rem] px-10 py-10">
                                    <h1 className="font-bold">ค้นหาตามภูมิภาค</h1>
                                    <div className="grid gap-6 grid-cols-3 px-5 py-5 gap-y-10">
                                        {
                                            arrMap.map((x, i) => (
                                                <div key={i} className="relative rounded-lg  flex flex-col ">
                                                    <a className="hover:border-black border rounded-lg h-32 w-32 "> <img src={x.image} className="h-full w-full object-cover cursor-pointer " /></a>
                                                    <div className="mt-1">{x.continent}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                }
                                {showSubNavbar == 2 && <div className="absolute top-20 inset-x-0 bg-white rounded-xl w-[44rem] px-10 py-10">
                                    <h1 className="font-bold text-center">วันที่</h1>
                                    <div className="flex justify-center mt-4">
                                        <div style={wrapperStyle}>
                                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                        </div>
                                    </div>
                                </div>}
                                {showSubNavbar == 3 && <div className="absolute  inset-y-0 right-0 top-20 bg-white rounded-xl w-[30rem] h-fit px-10 py-10">
                                    <div className="flex justify-center flex-col items-center divide-y space-y-5">
                                        {
                                            people.map((x, i) => (
                                                <div key={i} className="flex-row w-full flex justify-between py-5">
                                                    <div className="flex-col flex w-3/6 ">
                                                        <p className="font-bold">{x.age_range}</p>
                                                        <p className="text-gray-400">{x.details}</p>
                                                    </div>
                                                    <div className="flex flex-row justify-end items-center space-x-3">
                                                        <button onClick={() => handlePlus(i)} className="h-8 w-8 rounded-full bg-gray-100">&#x2b;</button>
                                                        <p>{x.quantity}</p>
                                                        <button onClick={() => handleMinus(i)} className="h-8 w-8 rounded-full bg-gray-100">&minus;</button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>}
                            </div>}
                        </div>
                        }
                    </div>
                </div>
                <div className="md:hidden flex h-20 py-3.5 justify-center items-center px-5 ">
                    <div className="flex flex-row w-full h-full rounded-full items-center justify-center py-2 border px-4">
                        <div className="w-1/6"><AiOutlineSearch /></div>
                        <div className="w-4/6 flex flex-col text-sm"><p>ที่ไหนก็ได้</p><input type="text" className="outline-none" placeholder="สัปดาห์ ทุกเวลา . เพิ่มผู้เข้าพัก" /></div>
                        <div className=" flex justify-center items-center border rounded-full h-8 w-8"><RiMenuAddFill /></div>
                    </div>
                </div>
                <Category />
            </div>
            <div id="body" className={`bg-white ${!changeShow && 'px-12 md:px-20'}  ${changeNavbar && 'blur-sm '} `} onClick={() => setChangeNavbar(false)} >
                <div className={` ${changeNavbar && 'pointer-events-none'} `}>{!changeShow ? <Item /> : <Map />} </div>
            </div>
            <div onClick={() => setChangeShow(!changeShow)} className={`${scrollPosition == 0 && window.innerWidth <= 768 ? 'hidden' : 'flex'} transition ease-in-out delay-150 hover:scale-110 duration-300
             items-center space-x-2 cursor-pointer fixed left-1/2 transform -translate-x-1/2 bottom-10 px-5 py-3 bg-black text-white rounded-full z-40`}>
                <div>{!changeShow ? 'แสดงแผนที่' : 'แสดงรายการ'} </div>
                <div>{!changeShow ? <BsMapFill /> : <TfiAlignJustify />} </div>
            </div>
            <div className={`${scrollPosition == 0 ? 'h-14' : 'h-0'} z-[1001] transition-all duration-300 flex md:hidden fixed inset-x-0 bottom-0 w-full bg-white  justify-center items-center space-x-5 text-gray-400 text-xl`}>
                {scrollPosition === 0 && <div className="flex flex-col justify-center items-center">
                    <AiOutlineSearch />
                    <label className="text-xs">สำรวจ</label>
                </div>}
                {scrollPosition === 0 && <div className="flex flex-col justify-center items-center">
                    <AiOutlineHeart />
                    <label className="text-xs">Wishlist</label>
                </div>}
                {scrollPosition === 0 && <a href="/login" className="flex flex-col justify-center items-center" onClick={() => handleOpenModalLogin()}>
                    <BsPersonCircle />
                    <label className="text-xs">เข้าสู่ระบบ</label>
                </a>}
            </div>
            <Authpage open={openModalLogin} handle={setModalLogin} />
        </div>
    )
}

export default Navbar
