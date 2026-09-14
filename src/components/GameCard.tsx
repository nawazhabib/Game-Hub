import { Card, Heading, Image, Text } from '@chakra-ui/react';
import type { Game } from '../hocks/useGames';
import PlatfromIconsList from './PlatformIconsList';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card.Root>
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <Heading as="h3" size="md">{game.name}</Heading>
                <PlatfromIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;