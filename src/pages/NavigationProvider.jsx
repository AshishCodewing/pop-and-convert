import React, { useState, useEffect } from 'react';

export const NavigationContext = React.createContext();

function NavigationProvider(props) {
    const [pathname, setPathname] = useState(window.location.pathname);

    function navigate(newPathname) {
        setPathname(newPathname);
        window.history.pushState(null, null, newPathname);
    };

    useEffect(() => {
        function handlePopState() {
            setPathname(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, []);

    return (
        <NavigationContext.Provider value={{ pathname, navigate }}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider