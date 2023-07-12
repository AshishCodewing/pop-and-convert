function Pagination({ notificationPerPage, totalNotification, handlePageChange, currentPage }) {
    return (
        <>
            <ul className="flex gap-1">
                {Array.from({ length: Math.ceil(totalNotification / notificationPerPage) }, (item, index) => {
                    return (
                        <li key={index}>
                            <button className={`border p-3 border-primaryAccent ${currentPage === index + 1 && 'bg-borderLight'}`} onClick={() => handlePageChange(index + 1)} >{index + 1}</button>
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default Pagination