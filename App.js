import { SafeAreaView, ScrollView } from 'react-native'

import Home from './src/views/Home/Home'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  )
}
