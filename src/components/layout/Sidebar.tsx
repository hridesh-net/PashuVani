const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 flex-shrink-0 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col h-screen">
            <div className="p-6 flex items-center gap-3">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">pets</span>
                </div>
                <div>
                    <h2 className="text-primary font-bold text-xl tracking-tight leading-none">PashuVaani</h2>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Gopu AI Powered</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto sidebar-scroll">
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]" href="#">
                    <span className="material-symbols-outlined text-[20px]">dashboard</span>
                    <span className="text-sm">Dashboard</span>
                </a>

                {[
                    { icon: 'groups', label: 'Farmers' },
                    { icon: 'health_and_safety', label: 'Animal Health' },
                    { icon: 'psychology', label: 'AI Monitoring' },
                    { icon: 'medical_services', label: 'Veterinary Network' },
                    { icon: 'chat', label: 'Consultations' },
                    { icon: 'menu_book', label: 'Knowledge Base' },
                ].map((item) => (
                    <a key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                    </a>
                ))}

                <div className="pt-4 pb-2">
                    <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">System</p>
                </div>

                {[
                    { icon: 'notifications', label: 'Notifications' },
                    { icon: 'payments', label: 'Payments' },
                    { icon: 'analytics', label: 'Reports' },
                    { icon: 'settings', label: 'Settings' },
                ].map((item) => (
                    <a key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                    </a>
                ))}
            </nav>

            <div className="p-4 border-t border-primary/10">
                <button className="w-full flex items-center justify-center gap-2 bg-primary py-2.5 rounded-lg text-white text-sm font-semibold shadow-sm hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Consultation
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
