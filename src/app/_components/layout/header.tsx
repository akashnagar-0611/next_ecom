import Navbar from '@/app/_components/layout/navbar'
import { FaAngleDown, FaCartArrowDown, FaUserAlt } from 'react-icons/fa'

const Header = () => (
    <header className="shrink-0">
        <div className="bg-primary shadow-sm">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 px-3 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,2fr)_minmax(0,1fr)] sm:gap-x-6 sm:px-6 sm:py-4 lg:px-8">
                <div className="min-w-0">
                    <span className="truncate text-lg font-bold italic sm:text-2xl">
                        Nexa Shopping
                    </span>
                </div>

                <label className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <span className="sr-only">Search products</span>
                    <input
                        type="search"
                        className="h-10 w-full min-w-0 rounded-sm border border-white bg-white/95 px-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        placeholder="Search products..."
                    />
                </label>

                <div className="flex items-center justify-self-end gap-3 text-sm sm:col-start-3 sm:row-start-1 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <FaUserAlt aria-hidden="true" className="size-4" />
                        <span className="sr-only sm:not-sr-only">My Account</span>
                        <FaAngleDown
                            aria-hidden="true"
                            className="hidden size-4 sm:block"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCartArrowDown aria-hidden="true" className="size-4" />
                        <span className="sr-only sm:not-sr-only">Cart</span>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </header>
)

export default Header