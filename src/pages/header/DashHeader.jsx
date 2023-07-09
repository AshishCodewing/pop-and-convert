import Icon from "../../assets/icons"

const headerIcons = [
    {
        toolTip: "Dashboard",
        icon: "globe"
    },
    {
        toolTip: "Youtube",
        icon: "youtube"
    },
    {
        toolTip: "Headphone",
        icon: "headphone"
    },
    {
        toolTip: "Doc",
        icon: "docs"
    },
    {
        toolTip: "Speaker",
        icon: "speaker"
    }
]

function DashHeader() {
    return (
        <>
            <nav className="mx-auto w-full shadow-[0_4px_4px_0_rgba(0,18,64,0.04)]">
                <div className="container mx-auto flex justify-between items-center py-6 px-8">
                    <div className="flex items-center space-x-2.5">
                        <Icon
                            icon="logo"
                        />
                        <h1 className="font-primary text-xl font-bold">Pop and Convert <span className="text-primary">PRO</span></h1>
                    </div>
                    <div className="hidden justify-between gap-3 md:flex">
                        {headerIcons.map(({icon, toolTip}, index) => {
                            return (
                                <Icon 
                                    key={index}
                                    icon={icon}
                                    tooltip={toolTip}
                                    classNames="rounded-full border border-borderLight p-3 hover:border-primary"
                                />
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default DashHeader;