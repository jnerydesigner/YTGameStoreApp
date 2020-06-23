import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Text from '../Text';
import games from '../../GameData';


import UserAvatar  from '../../src/assets/thumb-maior.png';

export default ProfileScreen = () => {

    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <AvatarContainer>
                <Avatar source={UserAvatar} />

                <Text medium>Dr. <Text large bold>Caneca</Text></Text>

                <Badge>
                    <Text>Jogador Profissional</Text>
                </Badge>

                <Stats>
                    <Stat>
                        <Text large>250
                            
                        </Text>
                        <Purchase color="#d63031">
                                Games
                            </Purchase>
                    </Stat>
                    <Stat>
                        <Text large>3
                            
                        </Text>
                        <Purchase color="#d63031">
                                Compras
                            </Purchase>
                    </Stat>
                </Stats>
            </AvatarContainer>
            <Text large center>
                Jogos Comprados
            </Text>

            <Games
            data={games}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
                
                <Game>
                    <GameImage  source={item.cover} />
                    <Info>
                        <Text>{item.title}</Text>
                        <Text>{Math.floor(Math.random() * 1000) + 1} Vendidos</Text>
                    </Info>
                    <Text>
                        ${Math.floor(Math.random() * 58) + 1}
                    </Text>
                </Game>
                
            )}
            />


        </Container>
    );
}



const Container = styled.View`
    flex:1;
    background-color: #b2bec3;
`;

const AvatarContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: #6c5ce7;
    border-bottom-left-radius:50px;
    border-bottom-right-radius:50px;
`;

const Avatar = styled.Image`
    height: 120px;
    width: 120px;
`;

const Badge = styled.View`
    background-color: #819ee5;
    align-self: center;
    padding: 4px 12px;
    border-radius: 8px;
    margin-top: 10px;
`;

const Stats = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;
const Stat = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Purchase = styled.Text`
    color: #d63031;
    font-weight: bold;
`;

const Games = styled.FlatList``;


const Game = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin-top:10px;
`;

const Info = styled.View`
    justify-content: center;
    align-items: center;
    
`;


const GameImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 5px;
`;
