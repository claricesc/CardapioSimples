import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={menu.container}>
      <Text style={menu.letra}>Cardápio</Text>

      <ScrollView>
        <View>
          <Text style={menu.letraI}>Lanches</Text>
        </View>

        <View>
          <Text style={menu.letraNP}>Big tradicional</Text>
        </View>
        <View
          style={[menu.funI, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image
            style={menu.imagem}
            source={require('./assets/hamburguer.png')}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={menu.letraI}>
              Suculenta carne grelhada, servida no pão macio com queijo
              derretido, alface crocante, tomate fresco e cebola, acompanhado de
              molho especial.
            </Text>
          </View>
        </View>

        <View>
          <Text style={menu.letraNP}>Big mc </Text>
        </View>
        <View
          style={[menu.funI, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image
            style={menu.imagem}
            source={require('./assets/hamburguer2.png')}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={menu.letraI}>
              Suculenta carne grelhada, servida no pão macio com queijo
              derretido, alface crocante, tomate fresco e cebola, acompanhado de
              molho especial.
            </Text>
          </View>
        </View>

        <View>
          <Text style={menu.letraNP}>Dois queijo</Text>
        </View>
        <View
          style={[menu.funI, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image
            style={menu.imagem}
            source={require('./assets/hamburguer3.png')}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={menu.letraI}>
              Suculenta carne grelhada, servida no pão macio com queijo
              derretido, alface crocante, tomate fresco e cebola, acompanhado de
              molho especial.
            </Text>
          </View>
        </View>

        <View>
          <Text style={menu.letraNP}>Duplo cheddar</Text>
        </View>
        <View
          style={[menu.funI, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image
            style={menu.imagem}
            source={require('./assets/hamburguer4.png')}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={menu.letraI}>
              Suculenta carne grelhada, servida no pão macio com queijo
              derretido, alface crocante, tomate fresco e cebola, acompanhado de
              molho especial.
            </Text>
          </View>
        </View>

        <View>
          <Text style={menu.letraI}>Bebidas</Text>
        </View>

        <View>
          <Text style={menu.letraNP}>Coca-Cola</Text>
        </View>
        <View
          style={[
            menu.funII,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Image style={menu.imagemB} source={require('./assets/coca1.png')} />
        </View>
        <View>
          <Text style={menu.letraNP}>Pepsi</Text>
        </View>
        <View
          style={[
            menu.funII,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Image style={menu.imagemB} source={require('./assets/coca2.png')} />
        </View>
        <View>
          <Text style={menu.letraNP}>Fanta uva</Text>
        </View>
        <View
          style={[
            menu.funII,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Image style={menu.imagemB} source={require('./assets/coca3.png')} />
        </View>

        <View>
          <Text style={menu.letraI}>Sobremesas</Text>
        </View>

        <View>
          <Text style={menu.letraNP}>Milk-shake</Text>
        </View>
        <View
          style={[menu.funI, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image
            style={menu.imagem}
            source={require('./assets/milkshake.png')}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={menu.letraI}>
              Suculenta carne grelhada, servida no pão macio com queijo
              derretido, alface crocante, tomate fresco e cebola, acompanhado de
              molho especial.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const menu = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#800000',
    fontSize: 35,
  },
  letra: {
    margin: 2,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  imagem: { width: 150, height: 150 },
  funI: {
    backgroundColor: ' 	#D3D3D3',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  letraI: {
    margin: 2,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  letraNP: {
    margin: 2,
    fontSize: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
  },
  col: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  funII: {
    backgroundColor: '#8B0000',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginLeft: 95,
  },

  imagemB: { width: 150, height: 150, alignItems: 'center' },

  funII: {
    backgroundColor: '#A0522D',
    
    padding: 10,
    borderRadius: 5,
  },

  marginTop: {
    marginTop:80,
  }
});
