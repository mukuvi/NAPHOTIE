import React from "react";
import WildlifeCard from "../ui/WildlifeCard";

const WildlifeGrid = () => {
  const wildlifeData = [
    {
      id: 1,
      name: "Lion",
      image:
        "https://1.bp.blogspot.com/-fdtFVvfGjSU/TykMmJqf9SI/AAAAAAAAJ9c/vhjYzVpzYEQ/s1600/Lion+7.jpeg",
    },
    {
      id: 2,
      name: "Elephant",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mCgUxdBEfECvh43WhuqYbwHaE6%26pid%3DApi&f=1&ipt=f8d075553ea1586823ae5a4c47deccb2fc131c4f8ac9d2da1894c8d0c4b38564&ipo=images",
    },
    {
      id: 3,
      name: "Giraffe",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Fgiraffe-wallpaper-10.jpg&f=1&nofb=1&ipt=bbaa025a2d2903c2c6681f199ed0614bd7028a117caa6433cf103c8ad0b319f8",
    },
    {
      id: 4,
      name: "Cheetah",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x4wXU1kNFBIbj1eXjBdOJAHaE8%26pid%3DApi&f=1&ipt=7700ad8f4b570c5ead9b4aa889e1f9610a1cbc1e73e0a2c418f4201cf2c5f326",
    },
    {
      id: 5,
      name: "Zebra",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff2%2FBeautiful_Zebra_in_South_Africa.JPG&f=1&nofb=1&ipt=bd1973326434fd1221cf46d4fe7df1ef75cd9549aadf14d760da86d9f7f4f958",
    },
    {
      id: 6,
      name: "Rhino",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F99%2F92699-050-26972485%2FWhite-rhinoceros-Mkuze-Game-Reserve-South-Africa.jpg&f=1&nofb=1&ipt=9e2cfbf4aca7c3c882daf862a2bb679f95b55372a89f98c8fae8e345b98460bb",
    },
  ];

  return (
    <section id="wildlife" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore <span className="text-amber-600">Wildlife</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the fascinating species roaming Africa's wild landscapes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wildlifeData.map((item) => (
          <WildlifeCard key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default WildlifeGrid;
