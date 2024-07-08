import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6 xl:mx-64 lg:mx-32 md:mx-32 mx-0">
      <div className="grid gap-6 m-auto justify-center items-center lg:flex lg:flex-row lg:items-start ">
        <Image
          src="/images/lake-bed1.JPG"
          alt="Louise on a dry lake bed"
          width={400}
          height={200}
          className="rounded-lg w-full md:w-2/3 sm:w-1/2 m-auto"
        />
        <div className="flex flex-col items-center m-auto lg:items-start md:w-2/3 sm:w-1/2">
          <h2 className="text-2xl font-lilyScriptOne">Welcome</h2>
          <p>
            Platea dictumst quisque sagittis purus sit amet volutpat consequat
            mauris. Nunc lobortis mattis aliquam faucibus purus in. Vivamus arcu
            felis bibendum ut tristique et egestas quis. Eget gravida cum sociis
            natoque penatibus. Senectus et netus et malesuada.
          </p>
        </div>
      </div>
    </main>
  );
}
