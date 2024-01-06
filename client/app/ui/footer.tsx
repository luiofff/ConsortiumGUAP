import Image from "next/image"
import logo from "../../public/logo.svg"


export default function Footer() {
    return (
        <>
            <div className="flex w-full h-28 items-center pl-28 pr-28 sm:justify-center">
                <Image
                    src={logo}
                    alt="Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="flex justify-between gap-12 text-white pl-28 pr-28 pb-28 pt-14 flex-wrap sm:pl-14 pr-14 pb-14 pt-14">
                <div className="flex flex-col gap-3">
                    <span className="font-thin  text-sm">Телефон:</span>
                    <span className="font-thin  text-sm">8-(800)-555-35-35</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-thin  text-sm">Электронная почта:</span>
                    <span className="font-thin  text-sm">engineer@guap.ru</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-thin  text-sm">Адрес:</span>
                    <span className="font-thin  text-sm">196128, Санкт-Петербург, Московский пр., д. 149в, лит. А</span>
                </div>
            </div>
        </>
    )
}