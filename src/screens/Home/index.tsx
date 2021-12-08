import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

import { styles } from './styles';

export function Home(): JSX.Element {
    return(
        <View style={styles.container}>
            <Header />
            <MessageList/>
        </View>
    )
}

