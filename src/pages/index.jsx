import Welcome from './welcome'
import NavigationProvider from "./NavigationProvider";
import Route from "./Route";
import Notifications from "./notifications";

const screens = [
    {
        href: '/',
        page: () => <Welcome />
    },
    {
        href: '/notifications',
        page: () => <Notifications />
    }
]

function PageComponent() {
    return (
        <NavigationProvider>
            {screens.map(({ href, page: Page }, index) => {
                return <Route key={index} href={href}><Page /></Route>
            })}
        </NavigationProvider>
    )
}

export default PageComponent;