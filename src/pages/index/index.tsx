import { View, Text } from '@tarojs/components'
import { useShareAppMessage } from '@tarojs/taro'
import './index.css'

const Index: React.FC = () => {
  useShareAppMessage(() => {
    return {

    }
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

export default Index
