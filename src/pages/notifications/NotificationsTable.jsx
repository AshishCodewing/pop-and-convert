import { useEffect, useMemo, useState } from "react";
import Icon from "../../assets/icons";
import Pagination from "../../components/Pagination";
import seed from "./seed";


function NotificationTable({ searchQuery }) {
    console.log(searchQuery);

    const [notifications, setNotifications] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [notificationPerPage] = useState(10);

    // Get current Notifications
    const indexOfLastNotification = currentPage * notificationPerPage;
    console.log(`index of last notification: ${indexOfLastNotification}`);

    const indexOfFirstNotification = indexOfLastNotification - notificationPerPage;
    console.log(`index of first notification: ${indexOfFirstNotification}`);


    useEffect(() => {
        setNotifications(seed)
    }, [])

    const searchFilters = ["title", "type", "stats", "status"];

    let searchedNotification = searchQuery === null || searchQuery.trim() === "" ? seed : notifications.filter((notification) => {
        return (
            searchFilters.some(searchFilter => notification[searchFilter].toString().toLowerCase().includes(searchQuery.toLowerCase()))
        )
    }
    )

    console.log(searchedNotification);

    useEffect(() => {
        setNotifications(searchedNotification)
    }, [searchQuery])

    console.log(`currentpage : ${currentPage}`);


    // Change Page
    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
        console.log('clicked');
        console.log(pageNumber);
    }

    const [selectedItems, setSelectedItems] = useState([])

    function selectAll() {
        selectedItems.length === notifications.length ? setSelectedItems([]) : setSelectedItems(notifications.map(notification => notification.id))
    }

    const handleCopyAction = (id) => {
        let toCopy = { ...notifications.find(notification => notification.id === id) }
        setNotifications([...notifications, { ...toCopy, id: notifications.length + 1, title: `${toCopy.title} -copy` }])
        console.log(toCopy);
    }

    const handleDeleteAction = (id) => {
        setNotifications(prevNotifications => prevNotifications.filter(prevNotification => id !== prevNotification.id))
    }

    function toggleStatus(id) {
        setNotifications(prevNotifications => {
            return prevNotifications.map(prevNotification => {
                return prevNotification.id === id ? { ...prevNotification, status: prevNotification.status === "active" ? "inactive" : "active" } : prevNotification
            })
        })
    }

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full leading-normal cus-boxShadow mb-12">
                <thead>
                    <tr className=" bg-primaryAccent text-sm border-b border-borderLight">
                        <th className="px-6 py-4 text-sm font-medium text-fontDark text-left flex gap-3 items-center">
                            <input
                                type="checkbox"
                                checked={selectedItems.length === notifications.length}
                                onChange={selectAll}
                            />
                            Notification Title
                        </th>
                        <th className="px-6 py-4 text-sm font-medium text-fontDark text-left">Notification Type</th>
                        <th className="px-6 py-4 text-sm font-medium text-fontDark text-left flex items-center gap-1">Stats <Icon icon="questionMark" /></th>
                        <th className="px-6 py-4 text-sm font-medium text-fontDark text-left">Status</th>
                        <th className="px-6 py-4 text-sm font-medium text-fontDark text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.slice(indexOfFirstNotification, indexOfLastNotification).map(({ id, title, type, stats, status }) => {
                        return (
                            <tr key={id} className="border-b border-borderLight">
                                <td className="px-6 py-4 text-sm font-medium text-fontDark text-left max-w-sm">
                                    <div className="flex gap-3 items-center">
                                        <input type="checkbox"
                                            name="checkbox"
                                            checked={selectedItems.includes(id)}
                                            onChange={() => {
                                                setSelectedItems(selectedItems.includes(id) ? selectedItems.filter(_id => _id !== id) : [...selectedItems, id])
                                            }}
                                        />
                                        {id} - {title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-fontDark text-left">
                                    <div className={`rounded-full px-2 py-1 inline-block capitalize ${type.toLowerCase() === 'sticky' ? 'bg-[#EBE0FF]' : 'bg-[#B7F4FF]'}`}>
                                        {type}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-fontDark text-left">
                                    {stats}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-fontDark text-left">
                                    <input type="checkbox"
                                        name="status"
                                        id="status"
                                        checked={status === "active" ? true : false}
                                        onChange={() => toggleStatus(id)}
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-fontDark text-left">
                                    <div className="flex gap-1 items-center">
                                        <button className="p-2.5" >
                                            <Icon
                                                icon="pen"
                                                tooltip="Edit"
                                            />
                                        </button>
                                        <button className="p-2.5" onClick={() => handleCopyAction(id)}>
                                            <Icon
                                                icon="copy"
                                                tooltip="Copy"
                                            />
                                        </button>
                                        <button className="p-2.5" onClick={() => handleDeleteAction(id)}>
                                            <Icon
                                                icon="trash"
                                                tooltip="Delete"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Pagination
                notificationPerPage={notificationPerPage}
                totalNotification={notifications.length}
                handlePageChange={paginate}
            />
        </div>
    )
}

export default NotificationTable