import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      <HomeMenu />

      <section className={'text-center my-16'}>
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />

        <div className={'text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consequatur
            doloribus quo! Fugiat fugit laudantium nemo sint vero voluptatem. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Alias amet consequatur doloribus quo! Fugiat fugit
            laudantiu
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias commodi
            consequuntur eos esse ex illo magni obcaecati, odio omnis praesentium quas quo, quos
            recusandae rem repellat soluta tempore vel?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores
            exercitationem hic, libero magnam quia veritatis. Culpa laudantium non praesentium
            quibusdam? Accusantium ad dolorem doloribus enim facere iusto molestiae, nam nulla
            numquam perspiciatis praesentium velit!
          </p>
        </div>
      </section>

      <section className={'text-center my-8'}>
        <SectionHeaders subHeader={"Don't hasitate "} mainHeader={'Contact us'} />

        <div className={'mt-8'}>
          <Link href={'tel:+46738123123'} className={'text-4xl underline text-gray-500'}>
            +46 738 123 123
          </Link>
        </div>
      </section>
    </>
  );
}
