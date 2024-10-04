import {useSideBar} from "@/providers/SideBarProvider.jsx";
import {useSendModal} from "@/providers/SendModalProvider.jsx";
import {useNavigate} from "react-router-dom";

export default function useAside() {

    const { isVisible, toggle } = useSideBar();

    const { toggleModal } = useSendModal();

    const navigate = useNavigate();

    const goToNavigate = (link) => {
        toggle();
        return navigate(link);
    }

    return {
        isVisible, toggle, toggleModal, goToNavigate
    }
}
