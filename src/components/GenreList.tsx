import { Genre, useGenres } from "@/hooks/useGenres";
import { HStack, List, Text, Image, Spinner, Button, Heading } from "@chakra-ui/react";

interface Props {
    selectedGenre: Genre | null;
    onGenreSelect: (genre: Genre) => void;
}

export const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (error) return <Text> {error}</Text>;
    return (
        <>
            <Heading fontSize={'2xl'} marginY={3}>Genres</Heading>
            {isLoading && <Spinner />}
            <List.Root listStyle="none">
                {data.map((genre) => (
                    <List.Item key={genre.id} paddingY={2}>
                        <HStack>
                            <Image
                                src={genre.image_background}
                                boxSize="32px"
                                borderRadius={8}
                                objectFit='cover'
                            ></Image>
                            <Button
                                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                                onClick={() => onGenreSelect(genre)}
                                fontSize='xl'
                                textAlign='left'
                                variant='ghost'
                                whiteSpace='normal'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    );
};
