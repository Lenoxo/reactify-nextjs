function LoadingCard() {
  return (
    <div>
        <div className="animate-pulse bg-zinc-400 cursor-not-allowed h-[224px] w-[256px] rounded-lg mb-6">
        <div className="animate-pulse bg-gray-300 w-full h-4/5 rounded-lg" />
        <div className="flex justify-between items-center px-2 py-1">
            <div className="animate-pulse bg-gray-300 w-1/2 h-4 rounded" />
            <div className="animate-pulse bg-gray-300 w-1/4 h-4 rounded" />
        </div>
        </div>
    </div>
  )
}

export { LoadingCard }
