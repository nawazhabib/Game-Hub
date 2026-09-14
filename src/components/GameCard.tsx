import { Card, Heading, Image } from '@chakra-ui/react';
import type { Game } from '../hocks/useGames';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card.Root>
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <Heading as="h3" size="md">{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;