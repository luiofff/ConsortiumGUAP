
import Image from 'next/image'
import sputnik from '../../public/sputnik.svg'

export default function TitleBlock() {
    return (
        <>
            <div className='w-full h-72 grid place-items-center'>
                <div className='flex flex-col gap-7 text-5xl font-bold mt-[6rem]'>
                    <h1 className='text-white text-4xl sm:text-3xl'>Консорциум -</h1>
                    <div className='flex gap-4 items-center'>
                        <h1 className="text-white text-4xl sm:text-3xl">это идеи </h1>
                        <Image
                            src={sputnik}
                            alt="sputnik"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                </div>
            </div>      
        </>
    );
}