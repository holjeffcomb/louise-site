import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl xl:text-6xl md:text-4xl font-lilyScriptOne p-6">
        Louise Holcomb Yoga
      </h1>
      <div className="flex flex-row justify-center items-center gap-12">
        <Link href="/">
          <p>home</p>
        </Link>
        <Link href="/about">
          <p>about</p>
        </Link>
        <Link href="/contact">
          <p>contact</p>
        </Link>
      </div>
    </div>
  );
}
