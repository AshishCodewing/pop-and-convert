function InfoCard(props) {
    return (
        <div className="bg-white rounded cus-boxShadow p-6 w-full md:p-8">
            <h2 className="text-lg font-bold font-primary mb-2 text-fontDark">{props.title}</h2>
            {props.children}
        </div>
    )
}

export default InfoCard;