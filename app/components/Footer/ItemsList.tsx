import type { LinkContent } from "@/types/LinkContent";

export default function ItemsList({ items }: { items: LinkContent[] }) {
  return (
    <>
      {items.map((link, index) => (
        <li key={index} className="text-white text-t3">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
}
