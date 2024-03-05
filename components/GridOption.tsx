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
        >
            <h2>{title}</h2>

            {image && (
            <Image
                src={image}
                alt={title}
                layout='fill'
            />
            )}
        </Link>
  )
}

export default GridOption;
