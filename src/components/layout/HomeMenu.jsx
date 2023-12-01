import Image from 'next/image';

const HomeMenu = () => {
  return (
    <section className={''}>
      <div className={'absolute h-full left-0 right-0 w-full justify-start'}>
        <div className={'absolute left-0 -top-[70px] text-left -z-10'}>
          <Image src={'/sallad1.png'} alt={'sallad'} width={109} height={189} />
        </div>

        <div className={'absolute -top-[100px] right-0 -z-10'}>
          <Image src={'/sallad2.png'} alt={'sallad'} width={107} height={195} />
        </div>
      </div>

      <div className={'text-center'}>
        <h3 className={'uppercase text-gray-500 font-semibold leading-4'}>Check out</h3>
        <h2 className={'text-primary font-bold text-4xl italic'}>Menu </h2>
      </div>

      <div className={'grid grid-cols-3 gap-4'}>
        <div className={'bg-gray-200 p-4 rounded-lg text-center'}>
          <Image src={'/pizza.png'} alt={'pizza'} width={659} height={653} />
          <h4 className={'font-semibold text-xl my-3'}>Pepperoni pizza</h4>
          <p className={'text-gray-500 text-sm'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, beatae blanditiis
            consectetur delectus, deleniti dignissimos earum excepturi{' '}
          </p>
          <button className={'mt-4 bg-primary text-white rounded-full px-8 py-2'}>
            Add to cart $12
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
