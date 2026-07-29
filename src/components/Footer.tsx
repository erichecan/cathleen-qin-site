export default function Footer() {
  return (
    <footer className="bg-sand/60 px-6 py-6 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 border-t border-line pt-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Cathleen Qin</span>
        <span>CathleenQin.com</span>
      </div>
    </footer>
  );
}
