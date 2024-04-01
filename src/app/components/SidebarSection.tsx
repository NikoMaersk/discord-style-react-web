import { ChevronDown, ChevronUp } from "lucide-react"
import { Children, ReactNode, useState } from "react"
import { Button } from "./button"


type SidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
    numberOfMembers?: number
}


export function SidebarSection({
    children,
    title,
    visibleItemCount = Number.POSITIVE_INFINITY,
    numberOfMembers: numberOfMembers
}: SidebarSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const showExpandButton = childrenArray.length > visibleItemCount
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return (
        <div>
            {title && <h1 className="ml-2 mt-2 text-base mb-2">{title} {numberOfMembers ? `- ${numberOfMembers}` : null}</h1>}
            {visibleChildren}
            {showExpandButton && (
                <Button
                    onClick={() => setIsExpanded((e) => !e)}
                    className="w-full flex item-center rounded-lg gap-4 p-3"
                    variant="ghost">
                    <ButtonIcon className="w-6 h-6" />
                    <div>{isExpanded ? "Show Less" : "Show More"}</div>
                </Button>
            )}
        </div>
    )
}