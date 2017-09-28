import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class NameValueText extends Component {
    render() {        
        let { name, value } = this.props;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 14, textAlign: 'left' }}>
                    {`${name}: `}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
        )
    }
}
export default NameValueText;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
});