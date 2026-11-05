import type { LinkContent } from "@/types/LinkContent";

export default function ItemsList({ items }: { items: LinkContent[] }) {
  return (
    <>
      {items.map((link, index) => (
        <li key={index} className="text-white text-t3">
          {/* Lien interne : meme onglet ; lien externe : nouvel onglet */}
          <a
            href={link.link}
            className="inline-block py-2 sm:py-0"
            {...(/^https?:\/\//.test(link.link) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
}
