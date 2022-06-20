import Link from "next/link";

export default function FancyLink({
  destination,
  a11yText,
  label,
  extraClasses,
}) {
  return (
    <Link href={destination}>
      <a
        aria-label={a11yText}
        className={`text-5xl focus:text-gray-500 ${extraClasses}`}
      >
        {label}
      </a>
    </Link>
  );
}
