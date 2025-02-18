import { Genre, useGenres } from "@/hooks/useGenres"
import { HStack, List, Text, Image, Spinner, Button } from "@chakra-ui/react";

interface Props {
    onGenreSelect: (genre: Genre) => void;
}

export const GenreList = ({ onGenreSelect } :Props) => {
    
    const {data, error, isLoading} = useGenres();

    return (
        <>
        {error && <Text> {error}</Text>}
        {isLoading && <Spinner/>}
        <List.Root listStyle='none'>
            {data.map(genre =>
                <List.Item key={genre.id} paddingY={2}>
                    <HStack>
                        <Image src={genre.image_background} boxSize='32px' borderRadius={8}></Image>
                        <Button onClick={() => onGenreSelect(genre)} fontSize='large' variant='ghost'>{genre.name}</Button>
                    </HStack>
                
                </List.Item>)}
        </List.Root>
        </>
    )
}