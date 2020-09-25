export default () => 
<div class="flex flex-col items-center justify-center w-screen h-16">
    {/* <span className="text-gray-800 text-2xl font-semibold z-40" >Αναζήτησε αυτό που ψάχνεις:</span> */}
    <div className="mx-auto px-4 pt-3 md:pt-10 max-w-7xl">
        <header className="max-w-6xl mx-auto mb-12 md:mb-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-gray-800 font-semibold leading-tight z-40">
                Αναζήτησε αυτό που ψάχνεις
            </h1>
        </header>
    </div>
    <div class="mt-10 relative text-gray-600 focus-within:text-gray-400
                sm:w-full w-full lg:w-1/3 border-2 border-blue-600 rounded-lg 
                shadow shadow-2xl transform scale-125"
    >
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </span>
        <input  type="search" 
                class=" w-full py-2 text-sm bg-gray-100 rounded-md pl-10 
                        focus:outline-none focus:bg-white focus:text-gray-900
                        placeholder-gray-400 focus:placeholder-opacity-0
                        transition duration-500 ease-in-out hover:bg-blue-100
                " 
                placeholder="π.χ. Ηλεκτρολόγοι Κοζάνη" 
                autocomplete="off"
        />
    </div>
</div>