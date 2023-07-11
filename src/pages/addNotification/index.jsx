import { useContext } from "react";
import { NavigationContext } from "../NavigationProvider";

import Icon from '../../assets/icons';
function AddNotifications() {
    const navObj = useContext(NavigationContext)
    return (
        <>
            <div className="px-8 container mx-auto py-8">
                <div className="flex flex-col items-start justify-between mb-6 gap-6 md:flex-row md:items-center">
                    <button className="flex items-center gap-1.5 text-fontDark font-medium" onClick={() => navObj.navigateBack()}><Icon icon="arrowLeft" />Back</button>
                    <div className="flex gap-4 items-center">
                        <button className='text-sm text-primary bg-transparent border border-primary py-3 px-6 font-semibold inline-block rounded hover:opacity-80 ease-in duration-200'>Save As Draft</button>
                        <button className='text-sm text-white bg-primary py-3 px-6 font-semibold inline-block rounded hover:opacity-80 ease-in duration-200'>Publish</button>
                    </div>
                </div>
                <div className="border rounded border-borderLight py-2 px-4 mb-6 text-placeholder">
                    Notification Title
                </div>
            </div>
        </>
    )
}

export default AddNotifications