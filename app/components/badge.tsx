export default function Badge({status}: {status?: "UP" | "DOWN"}) {
    const isUp = status === 'UP'
    return(
        <div>
            <span
                className={` ${isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
                {isUp ? "UP" : "DOWN"}
            </span>
        </div>
    )
}