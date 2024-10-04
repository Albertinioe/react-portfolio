import {createContext, useContext, useState} from 'react';

const SideBarContext = createContext({
    isVisible: false,
});

const SideBarProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <SideBarContext.Provider value={{ isVisible, toggle }}>
            {children}
        </SideBarContext.Provider>
    )
}

const useSideBar = () => useContext(SideBarContext);

export {SideBarProvider, useSideBar};
