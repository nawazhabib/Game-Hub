import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hocks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid borderRadius={10} overflow='hidden' columns={{ base: 1, md: 2, xl: 3 }} gap={6} p={4} >
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;