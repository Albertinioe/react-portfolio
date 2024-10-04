import ImageBG from '@/assets/bg.png'
import ImagePinterest from '@/assets/pinterest.png'
import ImageVk from '@/assets/vk.png'
import ImageInstagram from '@/assets/instagram.png'
import {Avatar, Button} from "@/components"
import {useNavigate} from "react-router-dom";
import {useSendModal} from "@/providers/SendModalProvider.jsx";

const SideBar = () => {

    const navigate = useNavigate();

    const { toggleModal } = useSendModal();

    return (
        <div className={'w-[300px] min-h-full bg-secondary relative flex-shrink-0 hidden lg:inline'}>
            <img src={ImageBG} alt="background image"/>
            <div className={'w-full flex justify-center items-center absolute left-1/5 top-[130px] flex-col px-5'}>
                <Avatar image={'https://randomuser.me/api/portraits/men/7.jpg'}/>
                <h2 className={'text-base'}>Дмитрий Валак</h2>
                <span className={'text-sm font-light text-gray-300'}>блог front-end разработчика</span>
                <div className={'*:w-[25px] flex gap-[15px] mt-[17px]'}>
                    <img src={ImageInstagram} alt="instagram logo"/>
                    <img src={ImageVk} alt="vk logo"/>
                    <img src={ImagePinterest} alt="pinterest logo"/>
                </div>
                <hr className={'border-secondary-content w-full border-b-1 my-[30px]'}/>
                <p className={'text-center text-xs font-normal'}>Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
                </p>
                <hr className={'border-secondary-content w-full border-b-1 my-[30px]'}/>
                <div className={'flex items-center gap-5 w-full'}>
                    <Button title={'Мои работы'} variant='danger' style={'flex-1'} onClick={() => navigate('/work')}/>
                    <Button onClick={() => toggleModal(true)} title={'Написать мне'} variant='primary' style={'flex-1 text-nowrap'}/>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
