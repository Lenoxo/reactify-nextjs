function Layout({ children }) {
  return (
    <div className="flex flex-col pt-20 items-center dark:text-white dark:bg-zinc-900">
      {children}
    </div>
  )
}

export { Layout }
