import InfoCard from "./InfoCard";
import Icon from "../../assets/icons";
import { NavigationContext } from "../NavigationProvider";
import { useContext } from "react";

const infoCardDatas = [
    {
        title: "Documentation",
        content: "Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.",
        link: () => <a href="#" className="inline-flex items-end gap-2 ease-in duration-200 hover:gap-4">Explore Documentation <Icon icon="arrowRight" /></a>
    },
    {
        title: "Support",
        content: "Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.",
        link: () => <a href="#" className="inline-flex items-end gap-2 ease-in duration-200 hover:gap-4">Contact Support Team <Icon icon="arrowRight" /></a>
    },
    {
        title: "Video Tutorials",
        content: "Unlock your creative potential with this comprehensive video tutorial that guides you step-by-step through mastering a new skill.",
        link: () => <a href="#" className="inline-flex items-end gap-2 ease-in duration-200 hover:gap-4">Check Out Now <Icon icon="arrowRight" /></a>
    }
]
function Welcome() {
    const navObj = useContext(NavigationContext)
    return (
        <div className="mx-auto w-full bg-background h-full">
            <div className="px-8 container mx-auto py-8">
                <div className="flex container flex-col-reverse justify-between items-center p-6 mx-auto gap-5 bg-white cus-boxShadow rounded lg:flex-row md:p-16 md:gap-16">
                    <div className="space-y-4 md:width-1/2">
                        <h2 className="text-2xl font-bold text-fontDark">Welcome to Pop and Convert Pro</h2>
                        <p className="text-fontLight text-base max-w-lg pb-4">
                            We're glad you're here. This platform is designed to provide you with all the tools and resources you need to be a successful coach. Whether you're new to coaching or a seasoned pro, we're confident that you'll find everything you need here to help your athletes.
                        </p>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <button className="text-sm text-white bg-primary py-3 px-6 font-semibold inline-block rounded hover:opacity-80 ease-in duration-200">Create New Notification</button>
                            <button className="text-sm text-white bg-primary py-3 px-6 font-semibold inline-block rounded hover:opacity-80 ease-in duration-200" onClick={() => navObj.navigate('/notifications')}>View All Notification</button>
                        </div>
                    </div>
                    <div className="md:width-1/2 ">
                        <iframe width="560" height="315" className="max-w-xs md:max-w-sm xl:max-w-xl" src="https://www.youtube.com/embed/nVJJ_ivgELA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="px-8 container mx-auto pb-8 gap-9 flex flex-col justify-between md:flex-row">
                {infoCardDatas.map(({ title, content, link: Link }, index) => {
                    return (
                        <InfoCard
                            key={index}
                            title={title}
                        >
                            <p className="text-fontLight mb-4 text-sm">{content}</p>
                            <div className="font-semibold text-primary">
                                <Link />
                            </div>
                        </InfoCard>
                    )
                })}
            </div>
        </div>
    )
}

export default Welcome;