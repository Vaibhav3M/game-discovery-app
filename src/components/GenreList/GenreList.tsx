import { useGenres } from "@/hooks/useGenres"
import { HStack, List, Text, Image, Spinner, Button } from "@chakra-ui/react";

export const GenreList = () => {
    
    const {genres, error, isLoading} = useGenres();

    return (
        <>
        {error && <Text> {error}</Text>}
        {isLoading && <Spinner/>}
        <List.Root listStyle='none'>
            {genres.map(genre =>
                <List.Item key={genre.id} paddingY={2}>
                    <HStack>
                        <Image src={genre.image_background} boxSize='32px' borderRadius={8}></Image>
                        <Button fontSize='large' variant='ghost'>{genre.name}</Button>
                    </HStack>
                
                </List.Item>)}
        </List.Root>
        </>
    )
}