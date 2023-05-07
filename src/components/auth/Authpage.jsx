import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Select from 'react-select'
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const options = [
    { value: 'Thai', label: 'Thai' },
    { value: 'Usa', label: 'Usa' },
    { value: 'England', label: 'England' }
]


Authpage.propTypes = {
    handle: PropTypes.func,
    open: PropTypes.bool,
}

function Authpage(props) {
    let subtitle
    const { handle, open } = props;
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        handle(!open)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '0.75rem',
            width: window.innerWidth >= 768 ? '35rem' : '100vw',
            height: window.innerWidth >= 768 ? '' : window.innerHeight,
            maxWidth: '100%',
            overflow: 'auto'
          },
        overlay: { zIndex: 1000 }
    };

    const customStylesSelect = {
        control: (base , state) => ({
            ...base,
            height: 50,
            maxnHeight: 50,
            borderBottomLeftRadius:  state.isFocused ? 0.5 : 0.5,
            borderBottomRightRadius: state.isFocused ? 0.5 : 0.5,
            borderTop:  state.isFocused ? 0 : 0,
            borderLeftWidth :  state.isFocused ? 0 : 0,
            borderRightWidth :  state.isFocused ? 0 : 0,
            borderBottomWidth :  state.isFocused ? 1 : 1,
            margin:2,
            boxShadow: 'none'
        })
    };
    return (
        <div id="root">
            <Modal
                isOpen={open}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='h-14 flex justify-around  border-b items-center w-[44rem] max-w-full '>
                    <div className='w-2/6'>
                        <button onClick={closeModal} className="h-8 w-8 hover:bg-gray-200 rounded-full">&#10005;</button>
                    </div>
                    <div className='w-2/6 truncate font-semibold '>เข้าสู่ระบบหรือลงทะเบียน</div>
                    <div className='w-2/6'></div>
                </div>
                <div id='body' className='py-5 flex flex-col space-y-3'>
                    <div className='text-xl my-5' ><label className='font-bold'>ยินดีต้อนรับสู่&nbsp;</label>Airbnb</div>
                    <div className='flex flex-col border bg-white rounded-xl '>
                        <Select options={options} placeholder="ประเทศ/ภูมิภาค" styles={customStylesSelect} />
                        <input type='text' placeholder='เบอร์โทร' className='h-[50px] outline-none mx-3' />
                    </div>
                    <div className='cursor-pointer h-[50px] flex justify-center items-center bg-gradient-to-r from-red-600 to-pink-500 rounded-xl text-white'>ดำเนินการต่อ</div>
                    <div className='flex flex-row items-center'>
                        <div className='border-b w-full'></div>
                        <div className='mx-3 text-xs'>หรือ</div>
                        <div className='border-b w-full'></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='border-black rounded-lg flex justify-between items-center border py-2 h-[50px]'>
                        <div className='w-2/6 flex justify-center items-center '><AiFillFacebook size={25} color='blue' /></div>
                        <div className='w-2/6 flex justify-center items-center whitespace-nowrap'>ดำเนินการต่อด้วย&nbsp;Facebook</div>
                        <div className='w-2/6 flex justify-center items-center '></div>
                    </div>
                    <div className='border-black rounded-lg flex justify-between items-center border py-2 h-[50px]'>
                        <div className='w-2/6 flex justify-center items-center '><FcGoogle size={25} /></div>
                        <div className='w-2/6 flex justify-center items-center whitespace-nowrap'>ดำเนินการต่อด้วย&nbsp;Google</div>
                        <div className='w-2/6 flex justify-center items-center '></div>
                    </div>
                    <div className='border-black rounded-lg flex justify-between items-center border py-2 h-[50px]'>
                        <div className='w-2/6 flex justify-center items-center '><AiFillApple size={25} /></div>
                        <div className='w-2/6 flex justify-center items-center whitespace-nowrap'>ดำเนินการต่อด้วย&nbsp;Apple</div>
                        <div className='w-2/6 flex justify-center items-center '></div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

Modal.setAppElement('#root');
export default Authpage