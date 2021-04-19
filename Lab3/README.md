Lab. nr 3 - renderowanie listy danych + obsługa progresu

do działania należy uruchomić:
- npm install @react-navigation/native
- npm install @react-navigation/drawer
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Zadanie wykorzystuje:
- funkcjami strzałkowymi - głównie przykłady z map(),
- metode map() dla tablic,
- zastosowaniem iteratorów i generatorów, ze strukturami danych Map() i Set(),
- dokumentacją FlatList w RN,
- dokumentacją ActivityIndicator w RN,
- przykładami użycia funkcji Math.random(),
- przykładami ww. zastosowań JS.

Zagadnienia do zrealizowania:
- wskazane użycie kodu z lab. nr 2, po to żeby mieć kilka ekranów 🌞
- na pierwszym ekranie należy zaimplementować sortowanie i filtrowanie danych; danymi niech będzie 100 pseudolosowych liczb całkowitych z zakresu (0, 1000),
- na drugim ekranie należy zaimplementować "leniwe ładowanie" (lazy loading) listy danych; danymi niech będą pseudolosowe litery,
- na ekranach od nr 3 do nr 5 należy zaimplementować progres krokowy (step progress); na kolejnych ww. ekranach powinny znaleźć się elementy ActivityIndicator, ostylowane inaczej na każdym z ekranów 3-5,


Widok nawigacji wykonanej przy pomocy drawer-navigation
![Navigation](Screenshots/Navigation.png "Navigation")
