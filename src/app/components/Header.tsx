import Nav from "./Nav";

export default function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl xl:text-6xl md:text-4xl font-lilyScriptOne p-6">
        Louise Holcomb Yoga
      </h1>
      <Nav />
    </div>
  );
}
