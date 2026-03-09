const Header: React.FC = () => {
    return (
        <header className="h-16 border-b border-primary/10 bg-white dark:bg-background-dark px-8 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                        placeholder="Search animals, farmers, or alerts..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-background-light dark:hover:bg-slate-800 transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-[1px] bg-primary/10 mx-2"></div>
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold leading-none text-slate-900 dark:text-slate-100">Dr. Rajesh Kumar</p>
                        <p className="text-[11px] text-slate-500 mt-1">Chief Veterinarian</p>
                    </div>
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/20">
                        <img
                            className="w-full h-full object-cover"
                            alt="Professional headshot of a veterinarian"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo-561AszzcNSAOK13UHhXxKc3SWd4hLEdJKr0xG2eCg7d9zVQdxoEP3-1roZVlsxO0mFBvSNMhv8ShS5Ke8tohX6abyYpdG0T449HQbUQ6WmPT_R-ZAMpXCQ0ICEsAyOm3Gw-7i2lu3ZkjCqkclIYZaoyzWTncbhJnQ4swgZy0sLNxU2--3uymF0MAv8J87MlHAsxHWv0CJHFGufmN84RTes6jMhMYaZJIJPJyyc6m2nlRTHgQjSqMIdMSrcDTfXgpF_TE2ULh6g"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
