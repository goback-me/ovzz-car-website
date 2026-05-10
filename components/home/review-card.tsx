export function ReviewCard({
  name,
  role,
  quote,
  avatar,
  onReadMore,
  wordLimit = 30,
}: {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  onReadMore?: () => void;
  wordLimit?: number;
}) {
  const words = quote.split(" ");
  const isLimited = words.length > wordLimit;
  const displayText = isLimited ? words.slice(0, wordLimit).join(" ") : quote;

  return (
    <article className="rounded-[14px] bg-[#242527] p-6 text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] flex flex-col">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(249,116,21,0.12)] text-base font-bold text-[var(--accent)] border border-[rgba(255,255,255,0.03)]">
          {avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-white">{name}</p>
          <p className="truncate text-xs text-white/50">{role}</p>
        </div>
        <div className="ml-auto shrink-0 text-sm text-[var(--accent)] tracking-wider">★★★★★</div>
      </div>
      <hr className="my-4 border-white/8" />
      <p className="text-sm leading-7 text-white/60 flex-1">
        {displayText}
        {isLimited && (
          <>
            {" "}
            <button
              onClick={onReadMore}
              className="text-white font-normal hover:text-white/80 transition inline"
            >
              read more
            </button>
          </>
        )}
      </p>
    </article>
  );
}
