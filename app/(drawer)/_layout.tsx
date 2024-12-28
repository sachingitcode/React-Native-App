import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Tabs',
        drawerLabel: 'Tabs',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />

    <Drawer.Screen
      name="profile"
      options={{
        headerTitle: 'Profile',
        drawerLabel: 'Profile',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="person-add-sharp" size={size} color={color} />
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
