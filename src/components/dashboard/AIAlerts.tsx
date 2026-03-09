interface AlertProps {
    icon: string;
    title: string;
    subtitle: string;
    statusText: string;
    statusColorClass: string;
    iconBgClass: string;
    iconColorClass: string;
}

const AlertItem: React.FC<AlertProps> = ({ icon, title, subtitle, statusText, statusColorClass, iconBgClass, iconColorClass }) => (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
        <div className={`size-10 rounded-full ${iconBgClass} flex items-center justify-center ${iconColorClass} flex-shrink-0`}>
            <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <div>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            <p className={`text-[10px] ${statusColorClass} font-bold uppercase mt-2`}>{statusText}</p>
        </div>
    </div>
);

const AIAlerts: React.FC = () => {
    const alerts = [
        {
            icon: 'vital_signs',
            title: 'Lumpy Skin Detection',
            subtitle: 'Farmer: Ram Singh (ID: 442)',
            statusText: 'Action Required',
            statusColorClass: 'text-red-500',
            iconBgClass: 'bg-red-100',
            iconColorClass: 'text-red-600'
        },
        {
            icon: 'thermometer',
            title: 'Abnormal Temp (Cow-88)',
            subtitle: 'Location: Hoshiarpur Farm',
            statusText: 'Monitoring',
            statusColorClass: 'text-amber-600',
            iconBgClass: 'bg-amber-100',
            iconColorClass: 'text-amber-600'
        },
        {
            icon: 'nutrition',
            title: 'Feeding Pattern Shift',
            subtitle: 'AI Insight: Possible Ketosis',
            statusText: 'Verified',
            statusColorClass: 'text-primary',
            iconBgClass: 'bg-primary/10',
            iconColorClass: 'text-primary'
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-primary/5 flex flex-col h-full">
            <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-slate-100">Critical AI Alerts</h3>
            <div className="space-y-6 flex-1 overflow-y-auto">
                {alerts.map((alert, index) => (
                    <AlertItem key={index} {...alert} />
                ))}
            </div>
            <button className="w-full mt-6 py-2 text-primary text-sm font-bold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                View All Alerts
            </button>
        </div>
    );
};

export default AIAlerts;
