import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ smallCardData, mediumCardData, largeCardData }) {
  return (
    <div className=''>
      <Head>
        <title>MiMiCuCu-Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <Hero />
      <main className='max-w-7xl mx-auto px-8 sm:px-10'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {smallCardData?.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {mediumCardData?.map((item) => (
              <MediumCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={largeCardData?.img}
          title={largeCardData?.title}
          desc={largeCardData?.desc}
          buttonText={largeCardData?.buttonText}
        />
      </main>
      {/*  <Footer /> */}
    </div>
  );
}

export async function getStaticProps() {
  const smallCardData = await fetch(
    "https://joealsaaidah.github.io/data/airbnb-data.json"
  ).then((res) => res.json());

  const mediumCardData = await fetch(
    "https://joealsaaidah.github.io/data/airbnb-data-2.json"
  ).then((res) => res.json());

  const largeCardData = {
    img: "/images/lc1.webp",
    title: "The Greatest Outdoors",
    desc: "wishlists curated by Airbnb.",
    buttonText: "Get Inspired",
  };

  return {
    props: { smallCardData, mediumCardData, largeCardData },
  };
}
