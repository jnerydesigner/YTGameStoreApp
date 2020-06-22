import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Text from '../Text';


export default GameScreen = ({ route, navigation }) => {
    const { game } = route.params;

    const renderStars = () => {
        let stars = [];

        for (let s = 1; s <= 5; s++) {
            stars.push(<Ionicons
                key={s}
                name="ios-star"
                size={16}
                style={{ marginRight: 5 }}
                color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"}
            />);
        }

        return <Stars>{stars}</Stars>
    }

    return (
        <GameContainer backgroundColor={game.backgroundColor}>
            <StatusBar barStyle="light-content" />

            <GameArtContainer>
                <GameArt source={game.cover} />

                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="ios-close"
                        size={48} color="#ffffff" />
                </BackButton>
            </GameArtContainer>
            <GameDescriptions>
                <GameInfoContainer>
                    <GameThumbContainer>
                        <GameThumb source={game.cover} />
                    </GameThumbContainer>
                    <GameInfo>
                        <Text center large>{game.title}</Text>
                        <Text center small>{game.teaser}</Text>
                    </GameInfo>
                </GameInfoContainer>


                <GameStatusContainer>

                    {renderStars()}
                    <Text medium>{game.rating}</Text>
                    <Text medium>{game.age}</Text>
                    <Text medium>{game.category[0]}</Text>
                    <Text medium>Jogo do Dia</Text>
                </GameStatusContainer>

                <ScreenShotsContainer>
                    <ScreenShots horizontal={true} showHorizontalIndicator={false}>
                        {game.screenshots.map((screenshot, index) => {
                            return (
                                <ScreenShotContainer key={index}>
                                    <ScreenShot source={screenshot} />
                                </ScreenShotContainer>
                            )
                        })}
                    </ScreenShots>
                </ScreenShotsContainer>
                <DescriptionContainer>
                    <Text>{game.description}</Text>
                </DescriptionContainer>

            </GameDescriptions>
        </GameContainer>
    );
}

const GameContainer = styled.View`
    flex: 1;
`;

const GameArtContainer = styled.View`
    position: relative;
`;

const GameArt = styled.Image`
    height: 360px;
    width: 100%;
    padding-top:20px;
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 30px;
    right:10px;
    background-color: #d63031;
    height:44px;
    width:44px;
    border-radius: 22px;
    justify-content: center;
    align-items: center;
`;

const GameInfoContainer = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const GameThumbContainer = styled.View`
    margin-right:10px;
`;
const GameInfo = styled.View``;

const GameThumb = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 10px;
`;

const GameStatusContainer = styled.View`
    flex-direction:row;
    justify-content: space-between;
    padding: 5px 10px;
`;


const Stars = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: center;
`;

const ScreenShotsContainer = styled.View``;
const ScreenShots = styled.ScrollView``;

const ScreenShotContainer = styled.View`
    padding: 16px;
`;
const ScreenShot = styled.Image`
    height: 200px;
    width: 200px;
    border-radius: 10px;

`;

const GameDescriptions = styled.ScrollView``;
const DescriptionContainer = styled.View`
    padding: 10px;
`;




