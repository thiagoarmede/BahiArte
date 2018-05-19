import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text , View, StatusBar} from 'react-native'
import { Constants, Location, Permissions } from 'expo';
import { Spinner } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import MapHelper from './MapHelper'
import firebase from 'firebase';
import EventInfo from './eventInfo';

@observer
export default class Map extends React.Component {
    @observable eventType = this.props.navigation.getParam('eventType', 'music');
    @observable selectedData = null;
    @observable loadingPosicao = true;
    @observable loadingDatabase = true;
    @observable estado = {
        location: null,
        errorMessage: null,
        region: {
            latitude: -12.978830,
            longitude: -38.504371,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        markerInicial: {
            latitude: null,
            longitude: null
        },
        markers: []

    }

    getData = (data) => {
        this.selectedData = {
            title: data.nome_evento,
            date: `${data.data} - ${data.horario}`,
            description: data.descricao,
            valor: data.gratuidade,
        }
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.estado.errorMessage = 'Permission to access location was denied';
        }
        let location = await Location.getCurrentPositionAsync({});
        this.estado.region = {
            latitude: this.selectedData ? this.selectedData.latitude : location.coords.latitude,
            longitude: this.selectedData ? this.selectedData.longitude : location.coords.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.09,
        }
        this.estado.markerInicial.latitude = this.selectedData ? this.selectedData.latitude : location.coords.latitude;
        this.estado.markerInicial.longitude = this.selectedData ? this.selectedData.longitude : location.coords.longitude;
        this.loadingPosicao = false;
    }

    fetchDatabase = () => {
        var self = this;
        if(this.eventType == 'music'){
            firebase.database().ref('musica').once('value').then(function(snapshot) {
                console.log("Valor: ", snapshot.val());
                self.estado.markers = _.values(snapshot.val());
            });
        } else if(this.eventType == 'exhibition') {
            firebase.database().ref('exibicoes').once('value').then(function(snapshot) {
                console.log("Valor: ", snapshot.val());
                self.estado.markers = _.values(snapshot.val());
            });
        }
        this.loadingDatabase = false;
    }


    async componentWillMount() {
        await this.fetchDatabase();
        await this._getLocationAsync();        
    }

    async componentWillUpdate() {
        this._getLocationAsync();
    }
 
    render(){
        const component = (this.loadingPosicao && this.loadingDatabase) ?
            ( <Spinner color={"blue"} />):
            (
                <React.Fragment>
                    <MapHelper markerInicial={this.estado.markerInicial}
                        region={this.estado.region}
                        arrayMarkers={this.estado.markers}
                        onSelectMarker={this.getData}
                        eventType={this.eventType}
                    />
                   {!this.selectedData 
                        ? <Button onPress={() => this.props.navigation.navigate('SignUp')} style={Style.buttonStyle} >
                            <Text style={Style.buttonTextStyle}>Selecione um evento!</Text>
                        </Button>
                        : <EventInfo title={this.selectedData.title} date={this.selectedData.date} description={this.selectedData.description} cost={this.selectedData.cost} />
                    }  
                </React.Fragment>                
            );
        return (
            <React.Fragment>
                <StatusBar
                    backgroundColor="#002141"  
                />
                <View style={{height: 56, paddingTop: StatusBar.currentHeight, marginBottom: 20}}>
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button style={{width: 100}} onPress={() => this.props.navigation.openDrawer()} transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>BahiArte</Title>
                        </Body>
                    </Header>
                </View> 
                <View >
                    {component}
                </View>
            </React.Fragment>
        )
    }
}

const Style = StyleSheet.create({
    map: {
        width: "100%",
        height: "65%",
    },
    buttonStyle: {
        height: 120,
        backgroundColor: '#D30C0F',
        width: "100%",  
        alignItems: 'center',
    },
    buttonTextStyle: {
        width: '100%',
        color: "white",
        fontSize: 22,
        textAlign: "center",
    },
})