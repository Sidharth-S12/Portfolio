export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} Sidharth S. Built with React + Tailwind.</p>
        <p>Kerala, India</p>
      </div>
    </footer>
  );
}
