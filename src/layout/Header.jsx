import NavItem from "@/components/NavItem.jsx";
import HeaderSearchInput from "@/components/HeaderSearchInput.jsx";
import {useNavigate} from "react-router-dom";
import MenuIcon from "icon@/MenuIcon.jsx";
import ArrowLeft from "icon@/ArrowLeft.jsx";
import {useSideBar} from "@/providers/SideBarProvider.jsx";

const Header = () => {

    const { isVisible, toggle } = useSideBar();

    const navigate = useNavigate();

    const goAnotherPage = (link, param) => {
        if (isVisible) toggle();
        if (param) return navigate(link + param);

        return navigate(link);
    }

    return (
        <div className={'h-[40px] bg-secondary-header flex items-center justify-between shadow'}>
            <div className={'items-center hidden lg:flex'}>
                <NavItem title='главная' onClick={() => goAnotherPage('/')}/>
                <NavItem title='статьи'>
                    <div className={'hidden absolute top-[40px] bg-blue-800 w-[165px] p-[12px] start-0 peer-active:inline z-10'}>
                        <ul className={'flex flex-col items-start gap-2'}>
                            <li><button className={'text-xs'}>Создание сайтов</button></li>
                            <li><button className={'text-xs'}>Интернет-маркетинг</button></li>
                            <li><button className={'text-xs'}>Продвижение видео</button></li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem title='обо мне'/>
            </div>
            <div className={'flex items-center gap-2 h-full justify-between w-full lg:w-auto lg:justify-start'}>
                <NavItem title='профиль' onClick={() => goAnotherPage('/profile')} styles={'hidden lg:inline'}/>
                <button className={'lg:hidden mx-3'} onClick={toggle}>
                    {!isVisible ? <MenuIcon/> : <ArrowLeft/> }
                </button>
                <HeaderSearchInput placeholder={'Поиск по блогу'} onChange={(text) => goAnotherPage('/search/', text)}/>
            </div>
        </div>
    );
};

export default Header;
