interface StatsCardProps {
    icon: string;
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    colorClass: string;
    bgColorClass: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value, trend, trendUp, colorClass, bgColorClass }) => {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-primary/5">
            <div className="flex items-center justify-between mb-4">
                <div className={`size-10 ${bgColorClass} rounded-lg flex items-center justify-center ${colorClass}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <span className={`${trendUp ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'} text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full`}>
                    <span className="material-symbols-outlined text-xs">{trendUp ? 'trending_up' : 'trending_down'}</span>
                    {trend}
                </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{label}</p>
            <h3 className="text-2xl font-bold mt-1 text-slate-900 dark:text-slate-100">{value}</h3>
        </div>
    );
};

const StatsCards: React.FC = () => {
    const stats = [
        { icon: 'groups', label: 'Total Farmers', value: '12,840', trend: '+12.5% vs last month', trendUp: true, colorClass: 'text-primary', bgColorClass: 'bg-primary/10' },
        { icon: 'warning', label: 'Active AI Alerts', value: '24', trend: '-2.4% vs last week', trendUp: false, colorClass: 'text-red-500', bgColorClass: 'bg-red-50' },
        { icon: 'medical_services', label: 'Network Veterinarians', value: '158', trend: '+18% vs last month', trendUp: true, colorClass: 'text-amber-500', bgColorClass: 'bg-amber-50' },
        { icon: 'check_circle', label: 'Total Consultations', value: '3,429', trend: '+8.2% vs last month', trendUp: true, colorClass: 'text-blue-500', bgColorClass: 'bg-blue-50' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default StatsCards;
