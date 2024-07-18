import Image from "next/image";
import profil from "../../public/profil.png";

export default function Home() {
  const links = [
    {
      title: "Facebook",
      url: "https:/facebook.com",
      icon: "https://cdn.simpleicons.org/facebook/white",
    },
    {
      title: "Instagram",
      url: "https:/twitter.com",
      icon: "https://cdn.simpleicons.org/instagram/white",
    },
    {
      title: "Tiktok",
      url: "https:/tiktok.com",
      icon: "https://cdn.simpleicons.org/tiktok/white",
    },
  ];

  return (
    <main className="flex min-h-screen mx-auto max-w-sm flex-col justify-center py-12 px-4 bg-slate-100 shadow-md space-y-12">
      <div className="w-[250px] h-[250px] rounded-full bg-blue-500 overflow-hidden self-center">
        <Image src={profil} width={500} height={500} />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">Rizky Yoga Krisnawan</h1>
        <h3 className="font-semibold text-base">
          Chemistry Teacher & Software Engineer
        </h3>
      </div>

      <div className="text-white font-semibold">
        <ul className="flex flex-col space-y-6">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="hover:translate-y-1 hover:shadow-xl transition duration-200"
              >
                <a href={link.url} target="_blank">
                  <div className="bg-blue-500 px-4 py-3 rounded-xl flex items-center">
                    <img src={link.icon} width="25px" className="mr-4" />
                    <h1>{link.title}</h1>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="self-center font-semibold">
        <h3>Copyright @Rizkyyoga</h3>
      </div>
    </main>
  );
}
