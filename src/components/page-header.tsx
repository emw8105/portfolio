export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="mb-14 max-w-3xl space-y-5">
      <h1 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-foreground">
        {title}
      </h1>
      {lede ? (
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {lede}
        </p>
      ) : null}
    </header>
  )
}
