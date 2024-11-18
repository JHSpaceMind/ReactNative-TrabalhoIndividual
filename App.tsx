import { View, StyleSheet } from 'react-native';
import { Navbar } from './src/components/NavBar';
import { Footer } from './src/components/Footer';
import { Storys } from './src/components/Storys';


export default function App() {
  return (
    <View style={styles.container}>
       <Navbar/>
       <Footer/>
      <Storys/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
