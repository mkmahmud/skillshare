

export default function OutlineButton({ texts, icon: Icon }: { texts?: string, icon: React.ElementType }) {
    return (
        <button className="px-6 py-2 border border-purple-400 text-purple-700 font-semibold rounded-xl bg-white hover:bg-purple-50 hover:border-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300">
            <span className="inline-flex items-center gap-2">
                {Icon && <Icon className='text-sm' />}
                {texts ? texts : "Button"}
            </span>
        </button>
    )
}