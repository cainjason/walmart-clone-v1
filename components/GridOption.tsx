import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    className?: string;
    image?: string;
};

function GridOption({title, className, image}: Props) {
  return (
    <Link 
    href={{
            pathname: "/",
            query: { q: title },
        }}
            className="relative"
        >
            <h2>{title}</h2>

            {image && (
            <Image
                src={image}
                alt={title}
                layout='fill'
                className="object-cover opacity-20 rounded-md"
            />
            )}
        </Link>
  )
}

export default GridOption;
