import { useContext } from 'react'
import { NavigationContext } from './NavigationProvider';

function Route({ children, href }) {
    const navObj = useContext(NavigationContext);
    const copy = { ...navObj };

    switch (copy.pathname) {
        case href:
            return children;
        default:
            return null;
    }
}

export default Route;