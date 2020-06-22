import React, { useState, useRef } from 'react';
import { View, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Text from '../Text';
import categoryList from '../../categories';
import games from '../../GameData';
import GameData from '../../GameData';


export default HomeScreen = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const gamesRef = useRef();

    const changeCategory = (category) => {
        gamesRef.current.scrollToOffset({x:0,y:0});
        setSelectedCategory(category);
    }

    const GameItem = (game) => {
        return (
            <Game onPress={() => navigation.navigate("GameScreen", {game})}>
                <GameCover source={game.cover} />

                <GameInfo backgroundColor={game.backgroundColor}>
                    <GameTitle>
                        <Text title light center black>{game.title}</Text>
                        <Text center medium black>{game.teaser}</Text>
                    </GameTitle>
                </GameInfo>
            </Game>
        );
    }
    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <Header>
                <Text light large>
                    Olá {""}
                    <Text large bold>Dr. Caneca</Text>
                    {`\n`}
                    <Text medium bold>Os Melhores Jogos para Hoje</Text>
                </Text>

                <Avatar source={require('../../src/assets/thumb-maior.png')} />
            </Header>

            <Categories horizontal={true} showsHorizontalScrollIndicator={false}>

                {categoryList.map((category, index) => {
                    return (
                        <Category key={index} onPress={() => changeCategory(category)}>
                            <CategoryName selected={selectedCategory === category ? true : false}>
                                {category}
                            </CategoryName>


                            {selectedCategory === category && <CategoryDot />}

                        </Category>
                    );
                })}

            </Categories>


            <Games
                data={games.filter((game) => {
                    return game.category.includes(selectedCategory) || selectedCategory === "Todas";
                })}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => GameItem(item)}
                ref={gamesRef}
            />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #636e72;
    
`;

const Header = styled.View`
    background-color: #636e72;
    flex-direction: row;
    justify-content:space-between;
    padding: 10px;
`;

const Avatar = styled.Image`
    width: 70px;
    height: 70px;
`;

const Categories = styled.ScrollView`
    margin-top:32px;
    margin-bottom: 32px;
`;

const Category = styled.TouchableOpacity`
    padding: 5px;
    align-items: center;
    margin: 0 16px;
    height:60px;
`;

const CategoryName = styled(Text)`
    color: ${props => props.selected ? "#819ee5" : "#9a9a9a"};
    font-weight: ${props => props.selected ? "700" : "500"};
    font-size: 22px;
    margin-bottom:20px;
`;

const CategoryDot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #819ee5;
    margin-top:-20px;
`;

const Games = styled.FlatList`
    margin-top: 5px;
`;

const Game = styled.TouchableOpacity`
    margin-top: 10px;
    padding:10px;
`;

const GameInfo = styled.View`
    margin: -50px 16px 0 16px;
    padding:16px;
    border-radius: 12px;
    height:120px;
`;
const GameCover = styled.Image`
    width: 100%;
    height:350px;
`;

const GameTitle = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;





