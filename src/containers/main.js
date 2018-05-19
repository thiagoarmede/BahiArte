import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Map from '../components/Map'
import firebase from 'firebase';
import Card from "../components/categoriesCard";

export class Main extends React.Component {


    componentWillMount(){
        const config = {
            apiKey: "AIzaSyD8qgVEBQWNEFIKBFRC7o20ylHJekUqCeo",
            authDomain: "bahiarte-44942.firebaseapp.com",
            databaseURL: "https://bahiarte-44942.firebaseio.com",
            projectId: "bahiarte-44942",
            storageBucket: "bahiarte-44942.appspot.com",
            messagingSenderId: "539607852714"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                {/*<ScrollView style={{paddingTop: 80}}>*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />                    */}
                {/*</ScrollView>*/}
                <Map />
            </View>
        );
    }
}
