import clsx from "@/utils/clsx.js";
import ImageBG from "@/assets/bg.png";
import {AsideItem, Avatar, Button} from "@/components/index.js";
import useAside from "@/hooks/useAside.js";

const Aside = () => {

    const { isVisible, toggle, goToNavigate, toggleModal } = useAside();

    return (
        <div className={
            clsx('fixed w-full h-full top-10 transition-all duration-500 ease-in-out sm:hidden',
                isVisible ? 'left-0' : ' -left-full'
            )}>
            {isVisible &&
                <div onClick={toggle} className={'w-full h-full absolute top-0 left-0'}></div>
            }
            <div className={
                clsx(
                    'h-full w-full sm:max-w-[300px] bg-secondary-header absolute z-10 top-0 transition-all duration-500 ease-in-out overflow-y-scroll no-scrollbar',
                    isVisible ? 'left-0' : ' -left-full'
                )
            }>
                <img className={'w-full object-cover h-44'} src={ImageBG} alt="background image"/>
                <div className={'w-full absolute flex top-[160px] px-5 left-0 flex-col items-end gap-3'}>
                    <div className={'flex items-end gap-3 w-full'}>
                        <Avatar image={'https://randomuser.me/api/portraits/men/7.jpg'} size={'md'}/>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-sm'}>Дмитрий Валак</h2>
                            <span className={'text-xs font-light text-gray-300'}>блог front-end разработчика</span>
                        </div>
                    </div>
                    <hr className={'border-secondary-content w-full border-b-1 my-3'}/>
                    <div className={'my-4 w-full'}>
                        <ul className={'w-full flex flex-col gap-6 text-md font-light'}>
                            <AsideItem onClick={() => goToNavigate('/')} title={'Главная'}/>
                            <AsideItem title={'Статьи'}>
                                <ul className={'ms-4 flex flex-col gap-5 mt-4'}>
                                    <AsideItem title={'Создание сайтов'}/>
                                    <AsideItem title={'Создание сайтов'}/>
                                    <AsideItem title={'Продвижение видео'}/>
                                </ul>
                            </AsideItem>
                            <AsideItem title={'Обо мне'} isActive={true}/>
                            <AsideItem title={'Профиль'} onClick={() => goToNavigate('/profile')}/>
                        </ul>
                    </div>
                    <hr className={'border-secondary-content w-full border-b-1 my-3'}/>

                    <div className={'flex items-center gap-5 w-full'}>
                        <Button title={'Мои работы'} variant='danger' style={'flex-1'}
                                onClick={() => goToNavigate('/work')}/>
                        <Button onClick={() => {
                            toggleModal(), toggle()
                        }} title={'Написать мне'} variant='primary' style={'flex-1 text-nowrap'}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Aside;
