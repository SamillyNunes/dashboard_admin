export default function Logo(){
    return (
        <div className={`
            h-10 w-10 bg-white rounded-full flex flex-col items-center justify-center
        `}>
            <div className="h-3 w-3 rounded-full bg-red-600"></div>
            <div className="flex mt-1">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></div>
                <div className="h-3 w-3 rounded-full bg-green-600"></div>

            </div>

        </div>
    );
}