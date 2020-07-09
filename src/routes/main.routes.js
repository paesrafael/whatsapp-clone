import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'
import CameraScreen from '~/pages/Camera'
import ConversationsScreen from '~/pages/Conversations'
import StatusScreen from '~/pages/Status'
import CallsScreen from '~/pages/Calls'

import Header from '~/components/Header'

import { Container } from '~/assets/styles'

const Tab = createMaterialTopTabNavigator()

export default function MainRoutes() {
  return (
    <>
      <Header />

      <Container>
        <Tab.Navigator
          initialRouteName="Conversations"
          tabBarOptions={{
            activeTintColor: '#009688',
            inactiveTintColor: '#767676',
            showIcon: true,
            labelStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            tabStyle: { width: 'auto' },
            indicatorStyle: {
              backgroundColor: '#009688',
            },
            style: {
              backgroundColor: '#EDEDED',
            },
          }}
        >
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              tabBarLabel: '',
              tabBarIcon: (focused) => {
                const iconFocused = focused.focused ? '#009688' : '#767676'
                return (
                  <Icon
                    name="camera"
                    size={25}
                    style={{
                      marginTop: 15,
                      color: iconFocused,
                    }}
                  />
                )
              },
            }}
          />

          <Tab.Screen
            name="Conversations"
            component={ConversationsScreen}
            options={{ tabBarLabel: 'Conversas' }}
          />

          <Tab.Screen
            name="Status"
            component={StatusScreen}
            options={{ tabBarLabel: 'Status' }}
          />

          <Tab.Screen
            name="Calls"
            component={CallsScreen}
            options={{ tabBarLabel: 'Chamadas' }}
          />
        </Tab.Navigator>
      </Container>
    </>
  )
}
