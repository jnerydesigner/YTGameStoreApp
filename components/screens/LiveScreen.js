import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Entypo, AntDesign } from '@expo/vector-icons';

import Text from '../Text';
import games from "../../GameData";


export default LiveScreen = () => {
   
    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <Header>
                <Text large bold>Streaming</Text>
                <SearchContainer>
                    <Search 
                    placeholder="Procurar live streams de games.."
                    placeholderTextColor="#838383"
                    />
                    <SearcIcon>
                    <Entypo name="magnifying-glass" size={24} color="#838383" />
                    </SearcIcon>
                </SearchContainer>
            </Header>

            <SectionContainer>
                <Text bold large>Jogos Populares</Text>

                <PopularGames horizontal={true} showHorizontalIndicator={false}>
                    {games.map((game, index) => {
                        return (
                            <PopularGameContainer key={index}>
                                <PopularGame source={game.cover} />
                            </PopularGameContainer>
                        );
                    })}
                </PopularGames>
            </SectionContainer>

            <SectionContainer>
                <LiveGamesTitle>
                    <Text large bold>Ao Vivo Agora</Text>
                    <Text medium bold >Ver Todos</Text>
                </LiveGamesTitle>
            </SectionContainer>

            <LiveGames 
            data={games} 
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
                <LiveGameContainer>
                    <LiveGame source={item.cover} />

                    <LiveGameOver>
                        <LiveGameTitle>
                            <Text>{item.title}</Text>
                        </LiveGameTitle>
                        <LiveGameBadge>
                            <Text>Live</Text>
                            <AntDesign name="eyeo" size={20} color="#ffffff" />
                            <Text>{item.live}</Text>
                        </LiveGameBadge>
                    </LiveGameOver>
                </LiveGameContainer>
            )}
            />
        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    background-color: #636e72;
`;

const Header = styled.View`
    margin: 32px 16px 0 16px;
`;

const SearchContainer = styled.View`
    position: relative;
    margin: 32px 8px;
    background-color: #404840;
    border-radius: 180px;
    justify-content: center;
`;

const Search = styled.TextInput`
    padding: 16px 64px 16px 32px;
    color: #c6c6c6;
`;

const SearcIcon = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
`;

const SectionContainer = styled.View`
    margin: 0 16px;
`;

const PopularGames = styled.ScrollView`
    margin: 16px 0 16px -16px;
`;

const PopularGameContainer = styled.View`
    margin: 0 16px;
`;

const PopularGame = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;

const LiveGamesTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LiveGames = styled.FlatList`
    flex: 1;
    margin: 16px 16px 0 16px;
`;

const LiveGameContainer = styled.View`
    position: relative;
`;

const LiveGame = styled.Image`
    height: 300px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 16px;
`;

const LiveGameOver = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    bottom: 25px;
    right: 16px;
`;

const LiveGameTitle = styled.View`
    background-color: #0984e3;
    padding:10px;
    margin-right:10px;
    border-radius: 10px;
`;

const LiveGameBadge = styled.View`
    background-color: #d63031;
    padding:10px;
    border-radius: 10px;
    flex-direction: row;
`;