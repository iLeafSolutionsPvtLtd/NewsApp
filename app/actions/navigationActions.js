/*
 * Reducer actions related with navigation
 */
import NavigationService from "app/navigation/NavigationService";

export function navigateToHome(params) {
  NavigationService.navigate("News", params);
}
