import React, { useState, useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import ReactPortal from"../ReactPortal";
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function PopupControls({
    children,
    onClose,
    onClick,
    buttonChild,
    isPopupOpen,
    setPopupOpen
}) {

    
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const handler = useCallback(() => {
        if (open) { 
            setOpen(false)
            if (onClose) { onClose() }
        }

        if (open && !isPopupOpen) {
            setOpen(false)
        }
    }, [isPopupOpen, onClose, open]);

    useEffect(() => {
        if (open && !isPopupOpen) {
            setOpen(false)
            setPopupOpen(true)
        }
    }, [isPopupOpen, open, setPopupOpen])
    useOnClickOutside(ref, handler);

    function onHeaderClick(e) {
        e.preventDefault();
        if(e.target === e.currentTarget) {
           // handle
            setOpen(false)
            
        }
    }
    
    // CLIENT REQUEST = When the scrollbar disappears, the screen behind moves. So I commented this function for the time being
    
    // useEffect(() => {
    //     const targetElement = document.querySelector('body');
    //     open ? disableBodyScroll(targetElement) : enableBodyScroll(targetElement)
    // return () => {
    //     enableBodyScroll(targetElement)
    // };
    // }, [isPopupOpen, onClose, open]);

    
    return (
        <div>
            <div
                className="flex items-center justify-center"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</div>
            {open && (
                <ReactPortal wrapperId="react-portal-modal-container">
                    <div className="fixed flex items-center justify-center w-screen h-screen bg-black bg-opacity-60 z-50 left-0 top-0" onClick={(e) => onHeaderClick(e)}>
                        <div>
                            {children}
                        </div>
                    </div>
                </ReactPortal>
            )}
        </div>
    );
}
