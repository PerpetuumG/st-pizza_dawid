import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <HomeMenu />

      <section className={'text-center my-16'}>
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
      </section>

      <div className={'text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consequatur doloribus
          quo! Fugiat fugit laudantium nemo sint vero voluptatem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Alias amet consequatur doloribus quo! Fugiat fugit laudantiu
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias commodi
          consequuntur eos esse ex illo magni obcaecati, odio omnis praesentium quas quo, quos
          recusandae rem repellat soluta tempore vel?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores exercitationem
          hic, libero magnam quia veritatis. Culpa laudantium non praesentium quibusdam? Accusantium
          ad dolorem doloribus enim facere iusto molestiae, nam nulla numquam perspiciatis
          praesentium velit!
        </p>
      </div>
    </>
  );
}
