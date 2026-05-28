import type { LinkContent } from "@/types/LinkContent";

export default function IconsList({ icons }: { icons: LinkContent[] }) {
    return (
        <>
            {icons.map((icon, index) => (
                <li key={index} className="text-snackly-gray text-p">
                    <a href={icon.link}>
                        <img
                            src={icon.name}
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
