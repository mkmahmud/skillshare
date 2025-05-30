export default function FillButton({ texts, icon: Icon }: { texts?: string, icon: React.ElementType }) {
    return (
        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <span className="inline-flex items-center gap-2">
                {Icon && <Icon className='text-sm' />}
                {texts ? texts : "Button"}
            </span>
        </button>
    );
}