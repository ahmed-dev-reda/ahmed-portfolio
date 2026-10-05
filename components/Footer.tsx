export default function Footer() {
  return (
    <footer id="contact" className="mt-8 bg-surface-container-lowest py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p className="flex items-center gap-2 text-[13px] font-normal leading-5 text-on-surface-variant">
          <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_10px_rgba(255,219,112,0.8)]" />
          © 2024 Richard Hanrick. All rights reserved.
        </p>
        <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-outline">
          San Francisco • Design Director • Available Q3/Q4
        </p>
      </div>
    </footer>
  );
}
