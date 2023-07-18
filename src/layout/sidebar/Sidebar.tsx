import { CustomerCard } from './CustomerCard'

export const Sidebar = () => (
    <aside className="flex">
        <div className="h-screen py-8 overflow-y-auto bg-primary-blue-900 border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
            <CustomerCard />
            <div className="mt-8 space-y-4">
                <button className="flex items-center bg-white w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
                
                    <div className="text-left rtl:text-right">
                        <h2 className="text-sm font-medium text-gray-700 capitalize dark:text-white">Company Overview</h2>        
                    </div>
                </button>

                <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
                
                    <div className="text-left rtl:text-right">
                        <h2 className="text-sm font-medium text-gray-700 capitalize dark:text-white">Billing Information</h2>
                    </div>
                </button>
            </div>
        </div>
    </aside>
)
