
import { Skeleton, SkeletonText } from "@/components/ui/skeleton"
import { Card } from "@chakra-ui/react"

export const GameCardSkeleton = () => {
    return (
        <Card.Root>
            <Skeleton height='200px'></Skeleton>
            <Card.Body>
                <SkeletonText></SkeletonText>
            </Card.Body>
        </Card.Root>
    )
}