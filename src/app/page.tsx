import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <div className="flex flex-row gap-6 justify-center items-center m-auto">
        <Image
          src="/images/lake-bed1.JPG"
          alt="Louise on a dry lake bed"
          width={400}
          height={200}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-lilyScriptOne">Welcome</h2>
          <p>I'm louise, hello, hi.</p>
        </div>
      </div>
    </main>
  );
}
