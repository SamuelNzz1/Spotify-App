
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes/indexSLB';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Routes></Routes>
    </SafeAreaView>
  );
}