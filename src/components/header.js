export default function Header(){
    return(
        <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <div className="Top bg-blue-600 flex justify-between items-center p-4">
        <div></div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-black border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>
      </div>

    )
    
};