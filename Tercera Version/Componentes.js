
// Se importan las librerias necesarias para construir los diferentes componentes de la vista
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Icon } from 'react-native-elements'



//CLASE ENCARGADA DE DIBUJAR LO QUE TENDRA EL ENCABEZADO
class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
        <Text style={{ color: 'white', }}>
          Interfaz Principal
         </Text>
      </View>
    );
  }
};


export default class Componentes extends React.Component {

  //EN ESTA VARIABLE JUSTO EN LA PROPIEDAD HEADER TITLE SE INYECTA LA CLASE CLASE ENCABEZADO
  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  //Iniciamos el constructor, las variables y enrutamos los metdos que seran usados posteriormente en la clase 
  constructor(props) {
    super(props);
    this.state = { variable1: "", variable2: ""};
    this.Metodo = this.Metodo.bind(this);
    this.IrVistaUsuarios = this.IrVistaUsuarios(this);
    this.IrVistaAmbientes = this.IrVistaAmbientes(this);
    this.IrVistaEventos = this.IrVistaEventos(this);
    this.IrVistaHorarios = this.IrVistaHorarios(this);
  }

  //Seccion de metodos
  Metodo() {
    alert("Mensaje trucho");
  }

  IrVistaUsuarios(){
    this.props.navigation.navigate('Usuarios');
  }

  IrVistaAmbientes(){
    this.props.navigation.navigate('Ambientes');
  }

  IrVistaEventos(){
    this.props.navigation.navigate('Eventos');
  }

  IrVistaHorarios(){
    this.props.navigation.navigate('Horarios');
  }



  //Metodo encargado de mostrar todos los componentes
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cuerpo}>



            <ActionButton icon={<Icon name='fingerprint' size={50} color='#e31a1a'/>} btnOutRange='#ffff' buttonColor="#ffff">

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='accessibility' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff' onPress={this.Metodo}> 
                <Icon name='border-all' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='memory' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='alarm' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='settings' color='#e31a1a' size={30}/>
              </ActionButton.Item>


            </ActionButton>

        </View>
      </View >
    );
  }
}


// Hoja de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cabeza: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
