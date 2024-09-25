import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';

const Stack = createNativeStackNavigator();
/**
 * AppNavigation is a functional component that sets up the navigation structure for the application.
 * It uses a Stack Navigator to manage two screens: "main" and "peopleDetails".
 * 
 * - The "main" screen displays the PeoplePage component with a customized header.
 *   - Title: "Contacts"
 *   - Header background color: black
 *   - Header title color: white
 *   - Header title font size: 30
 *   - Header title alignment: center
 * 
 * - The "peopleDetails" screen displays the PeopleDetailsPage component with a dynamic header title based on the route parameter.
 *   - Title: First name of the person from the route parameter
 *   - Header background color: black
 *   - Header title color: white
 *   - Header title font size: 30
 *   - Header title alignment: center
 *   - Header back button color: white
 * 
 * @returns {JSX.Element} The navigation container with the configured stack navigator.
 */
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="main" component={ PeoplePage } options={{ 
            title: "Contacts", 
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 30,
            },
            headerTitleAlign: "center",
          }} />
          <Stack.Screen name="peopleDetails" component={ PeopleDetailsPage } options={({ route }) => ({
            title: route.params.people.name.first,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 30,
            },
            headerTitleAlign: "center",
            headerTintColor: "white"
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;