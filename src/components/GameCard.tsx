import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import type { Game } from '../hocks/useGames';
import PlatfromIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/getCroppedImageUrl';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card.Root width='300px'>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
            <Card.Body>
                <Heading as="h3" size="md">{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatfromIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;