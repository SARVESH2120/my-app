export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
    <section>
        <header>header</header>
        {children}
        <footer>footer</footer>
        </section>)
  }