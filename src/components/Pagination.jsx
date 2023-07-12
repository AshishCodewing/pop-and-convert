function Pagination({notificationPerPage, totalNotification, handlePageChange}) {
    return (
        <ul className="flex gap-1">
            {Array.from({length: Math.ceil(totalNotification / notificationPerPage)}, (_, i) => {
                return (
                    <li key={i} className="border p-3 border-primaryAccent">
                        <button onClick={() => handlePageChange(i + 1)} >{i+ 1}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Pagination