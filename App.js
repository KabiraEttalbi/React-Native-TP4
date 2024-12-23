import {Text, View } from 'react-native';
import DisplayInputContent from "./screens/DisplayInputContent"
import SayHello from './screens/SayHello';

export default function App() {
  return (
<>
      <Text style={{marginTop:60}}>--------------------TP 4 - EX 1--------------------</Text>
      <SayHello/>
      <Text>--------------------TP 4 - EX 2--------------------</Text>
      <DisplayInputContent/>
    </>
  );
}

