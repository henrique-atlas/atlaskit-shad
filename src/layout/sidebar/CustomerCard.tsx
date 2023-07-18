export const CustomerCard = () => (
    <div className="max-w-lg mx-auto rounded-lg shadow-md p-5">
        <img className="w-14 h-14 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/>
        <h2 className="text-center text-black text-lg font-semibold mt-3">Tesla</h2>
        <p className="text-center text-gray-600 text-sm mt-1">South America</p>
        <div className="mt-5">
            <div className="flex items-center">
                <p className="flex grow text-atlas-gray-900 font-normal">No of Countries</p>
                <p className="flex justify-center h-6 w-8 items-center border border-black bg-green-500 font-normal text-white uppercase rounded-lg outline-none shadow-lg">12</p>
            </div>
            <div className="flex items-center mt-2">
                <p className="flex grow text-atlas-gray-900 font-normal">No of WSE</p>
                <p className="flex justify-center h-6 w-8 items-center border border-black bg-green-500 font-normal text-white uppercase rounded-lg outline-none shadow-lg">22</p>
            </div>
            <div className="flex items-center mt-2">
                <p className="flex grow text-atlas-gray-900 font-normal">No of Contractors</p>
                <p className="flex justify-center h-6 w-8 items-center border border-black bg-green-500 font-normal text-white uppercase rounded-lg outline-none shadow-lg">32</p>
            </div>
        </div>
    </div>
)