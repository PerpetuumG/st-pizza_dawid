import Image from 'next/image';

const MenuItem = () => {
  return (
    <div
      className={
        'bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'
      }
    >
      <div className={'text-center'}>
        <Image src={'/pizza.png'} alt={'pizza'} width={300} height={200} className='mx-auto' />
      </div>

      <h4 className={'font-semibold text-xl my-3'}>Pepperoni pizza</h4>
      <p className={'text-gray-500 text-sm'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, beatae blanditiis
        consectetur delectus, deleniti dignissimos earum excepturi{' '}
      </p>
      <button className={'mt-4 bg-primary text-white rounded-full px-8 py-2'}>
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
