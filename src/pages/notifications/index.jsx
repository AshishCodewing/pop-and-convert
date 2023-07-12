import { useContext, useState } from "react";
import Icon from "../../assets/icons";
import { NavigationContext } from "../NavigationProvider";
import NotificationTable from "./NotificationsTable";



function Notifications() {

    // Search Query
    const [searchQuery, setSearchQuery] = useState("");

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    const navObj = useContext(NavigationContext);

    return (
        <>
            <div className="px-8 container mx-auto py-8">
                <div className="flex flex-col justify-between items-start mb-6 gap-6 md:flex-row md:items-center">
                    <h1 className="text-2xl text-fontDark font-semibold">All Notifications</h1>
                    <div className="flex flex-col gap-3 items-start md:flex-row">
                        <div className="relative">
                            <input className="py-2.5 pl-12 pr-4 border rounded border-borderLight" type="text" placeholder="What are you looking for..."
                                name="search"
                                value={searchQuery}
                                onChange={handleChange}
                            />
                            <button className="absolute top-0 left-0 h-full py-3 px-4"><Icon icon="search" /></button>
                        </div>
                        <button className="text-sm text-white bg-primary py-3 px-6 font-semibold inline-block rounded hover:opacity-80 ease-in duration-200" onClick={() => navObj.navigate('/add-notifications')}>Add Notification</button>
                    </div>
                </div>
                <NotificationTable
                    searchQuery={searchQuery}
                />
            </div>
        </>
    )
}

export default Notifications;