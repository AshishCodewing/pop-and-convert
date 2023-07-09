import { useState } from "react";
import Icon from "../../assets/icons";

const defaultNotifications = [
    {
        id: 1,
        title: "Notification 1",
        type: "sticky",
        stats: 300,
        status: true,
    },
    {
        id: 2,
        title: "Notification 2",
        type: "popup",
        stats: 400,
        status: false,
    },
    {
        id: 3,
        title: "Notification 3",
        type: "popup",
        stats: 500,
        status: true,
    },
    {
        id: 4,
        title: "Notification 4",
        type: "popup",
        stats: 600,
        status: true,
    }
]

function NotificationTable() {
    const [notifications, setNotifications] = useState(defaultNotifications)
    const [selectedItems, setSelectedItems] = useState([])

    console.log(notifications);

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
                return prevNotification.id === id ? { ...prevNotification, status: !prevNotification.status } : prevNotification
            })
        })
    }
    return (
        <table className="min-w-full leading-normal cus-boxShadow">
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
                {notifications.map(({ id, title, type, stats, status }) => {
                    return (
                        <tr key={id} className="border-b border-borderLight">
                            <td className="px-6 py-4 text-sm font-medium text-fontDark text-left">
                                <div className="flex gap-3 items-center">
                                    <input type="checkbox"
                                        name="checkbox"
                                        checked={selectedItems.includes(id)}
                                        onChange={() => {
                                            setSelectedItems(selectedItems.includes(id) ? selectedItems.filter(_id => _id !== id) : [...selectedItems, id])
                                        }}
                                    />
                                    {title}
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
                                    checked={status}
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
    )
}

export default NotificationTable