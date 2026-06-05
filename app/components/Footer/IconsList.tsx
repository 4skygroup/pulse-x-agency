import type { LinkContent } from "@/types/LinkContent";
import Image from "next/image";

export default function IconsList({ icons }: { icons: LinkContent[] }) {
    return (
        <>
            {icons.map((icon, index) => (
                <li key={index} className="text-snackly-gray text-p">
                    <a href={icon.link}>
                        <Image
                            src={icon.name}
                            width={24}
                            height={24}
                            alt={
                                icon.name.split("/")
                                    ? icon.name.split("/").reverse()[0]
                                    : icon.name
                            }
                        />
                    </a>
                </li>
            ))}
        </>
    );
}
