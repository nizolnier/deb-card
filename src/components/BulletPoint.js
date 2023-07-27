const BulletPoint = ({title, c1, c2, c3}) => {
    return <div>
        <p className="text-xl font-medium pb-4">{title}</p>
        <p className="pb-4">{c1}<br className="py-4"></br>{c2}<br className="py-4"></br>{c3}</p>
    </div>
}

export default BulletPoint