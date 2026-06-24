export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050b14] px-4 py-8 text-[#cbcbcb] sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-xl">
        <p className="text-sm font-poppins text-white/75">
          © {new Date().getFullYear()} RenovaJF - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
