import { useContext, createContext, useState } from "react";

const SendModalContext = createContext({
    isOpen: false,
})

const SendModalProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <SendModalContext.Provider value={{isOpen, toggleModal}}>
            {children}
        </SendModalContext.Provider>
    )
}

const useSendModal = () => useContext(SendModalContext);

export {SendModalProvider, useSendModal};
