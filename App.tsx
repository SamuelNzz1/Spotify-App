
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes/indexSBLM';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Routes></Routes>
    </SafeAreaView>
  );
}