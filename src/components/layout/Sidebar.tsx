import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
        { icon: 'person', label: 'Farmers', path: '/farmers' },
        { icon: 'health_and_safety', label: 'Animal Health', path: '/health' },
        { icon: 'monitoring', label: 'AI Monitoring', path: '/monitoring' },
        { icon: 'medical_services', label: 'Veterinary Network', path: '/network' },
        { icon: 'chat', label: 'Consultations', path: '/consultations' },
        { icon: 'auto_stories', label: 'Knowledge Base', path: '/kb' },
    ];

    const systemItems = [
        { icon: 'notifications', label: 'Notifications', path: '/notifications' },
        { icon: 'payments', label: 'Payments', path: '/payments' },
        { icon: 'analytics', label: 'Reports', path: '/reports' },
        { icon: 'settings', label: 'Settings', path: '/settings' },
    ];

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
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${isActive
                                ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/20 scale-[1.02]'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className="material-symbols-outlined text-[20px]"
                                    style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                                >
                                    {item.icon}
                                </span>
                                <span className="text-sm">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}

                <div className="pt-4 pb-2">
                    <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">System</p>
                </div>

                {systemItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${isActive
                                ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/20'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 mt-auto">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 mb-4">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-2">System Status</p>
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">AI Diagnostics Online</span>
                    </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-primary py-2.5 rounded-lg text-white text-sm font-semibold shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Consultation
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
