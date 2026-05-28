import type { LinkContent } from "./LinkContent";

type Content = LinkContent[]

export interface FooterProp {
    policy: Content,
    services: Content,
    entities?: Content,
    media?: Content,
    entityName?: string,
    color?: string
}