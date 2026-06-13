import Image from "next/image";

export default function NotFound () {
    return (
        <main className={'coming_soon_container'}>
            <Image className={'coming_soon'} width={500} height={400} src={'/coming_soon.png'} alt={'Coming Soon'} />
        </main>
    )
}