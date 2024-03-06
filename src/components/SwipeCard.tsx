import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import { bird1, bird2, bird3, bird4 } from '../assets/Images';

interface CardProps {
  id: number;
  text: string;
  image: string;
}

// Sample data for cards
const cards: CardProps[] = [
  {
    id: 1,
    text: 'Card 1 content',
    image:
      bird1,
  },
  {
    id: 2,
    text: 'Card 2 content',
    image:
      bird2,
  },
  {
    id: 3,
    text: 'Card 3 content',
    image:
      bird3,
  },
  {
    id: 4,
    text: 'Card 4 content',
    image:
      bird4,
  },
];

// Card component
const Card: React.FC<CardProps> = ({ id, text, image }) => (
  <ImageBackground source={{ uri: image }} style={styles.card}>
    {/* Card content (image, text) */}
    <Text style={styles.cardText}>{text}</Text>
  </ImageBackground>
);

// Main component with swipe animation
const SwipeCards: React.FC = () => {
  const [resetIndex, setResetIndex] = useState(0);
  const swiperRef = useRef<DeckSwiper>(null);

  // Handle swipe actions
  const onSwiped = () => {
    // Handle logic after a card is swiped
  };

  return (
    <DeckSwiper
      ref={swiperRef}
      cards={cards}
      renderCard={(card) => <Card key={card.id} {...card} />}
      onSwiped={onSwiped}
      cardIndex={0} // Starting index
      backgroundColor="transparent" // Set background color
      goBackToPreviousCardOnSwipeRight={true}
      goBackToPreviousCardOnSwipeLeft={false}
      infinite={true}
      overlayLabels={{
        bottom: {
          title: 'BLEAH',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
        },
        left: {
          title: 'NOPE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: -30,
            },
          },
        },
        right: {
          title: 'LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: 30,
            },
          },
        },
        top: {
          title: 'SUPER LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
        },
      }}
      animateOverlayLabelsOpacity
      animateCardOpacity
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
  },
  cardText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SwipeCards;
