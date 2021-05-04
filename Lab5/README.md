### Lab. nr 5 - obsługa gestów użytkownika

### do działania należy uruchomić:
- npm install @react-navigation/native
- npm install @react-navigation/drawer
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install react-native-webview
- npm install react-native-paper
- npm install react-native-swipeable

#### Zadanie wykorzystuje:
- Gesture Responder System w React Native,
- obsługą komponentu ScrollView w React Native,
- metodą fill(),
- obsługą komponentu TouchableOpacity w React Native,
- obsługą komponentu Pressable w React Native,
- obsługą komponentu TouchableHighlight w React Native,
- obsługą komponentu Swipeable w React Native,

### Zagadnienia do zrealizowania:
- wskazane użycie kodu z lab. nr 2, po to żeby mieć kilka ekranów 🌞
- na pierwszym i na drugim ekranie należy zaimplementować użycie komponentu ScrollView, na każdym z nich powinnny być różne style (Flexbox) oraz widoczny pasek przewijania (scrollbar)
- na trzecim ekranie należy zaimplementować użycie komponentów TouchableOpacity i TouchableHighlight; na ➕ można pokusić się o użycie komponentu WebView po naciśnięciu przycisku,
- na czwartym ekranie należy zaimplementować obsługę przesunięć palcem (komponent Swipeable);
- ➕ za modyfikacje kodu (tak, by były inne niż te w przykładach) i za dodatkowe ekrany (np. druga wersja z komponentem Swipeable lub użycie komponentu Pressable).

### Widok nawigacji wykonanej przy pomocy drawer-navigation (rozbudowa aplikacji z Lab2, dodane nowe podstrony)
![Menu](Screenshots/Menu.png "Menu")

### Widok standardowego elementu ScrollView
![ScrollView1](Screenshots/ScrollView1.png "ScrollView1")

### Widok elementu ScrollView z ustawionymi parametrami 'stickyHeaderIndices' oraz 'onScrollEndDrag'
![ScrollView2](Screenshots/ScrollView2.png "ScrollView2")

### Widok standardowego elementu TouchableOpacity
![Touchable1](Screenshots/Touchable1.png "Touchable1")

### Widok standardowego elementu TouchableHighlight
![Touchable2](Screenshots/Touchable2.png "Touchable2")

### Widok wyszukiwania frazy z wykorzystaniem elementu WebView w wyszukiwarce google
![Touchablesearch](Screenshots/TouchableSearch.png "TouchableSearch")
### Wynik wyszukiwania frazy AMW
![Touchablesearch2](Screenshots/TouchableSearch2.png "TouchableSearch2")

### Widok elementu Swipeable z ustawionymi parametrami:
- 'leftActionActivationDistance' -> dystans przeciągnięcia po jakim następuje aktywacja
- 'leftContent' -> wyświetlane informacje na lewym pasku
- 'onLeftActionActivate' -> funkcja wywoływana przy aktywacji lewego przeciągnięcia
- 'onLeftActionDeactivate' -> funkcja wywoływana przy deaktywacji lewego przeciągnięcia (kolejne przeciągnięcie po poprawnym wykonaniu pierwszego)
- 'onLeftActionComplete' -> funkcja ustawiająca wartości na stronie po zakończeniu akcji przeciągania (aktywacji lub deaktywacji)
- 'rightButtons' -> definiuje przyciski któe pojawiają się z prawego przeciągnięcia (w tym wypadku wykorzystany został element 'TouchableOpacity', a nie 'Button')

### Widok elementu 'Swipeable'
![Swipeable1](Screenshots/Swipeable1.png "Swipeable1")

### Widok lewego przeciągnięcia
![SwipeableLeft](Screenshots/SwipeableLeft.png "SwipeableLeft")
### Widok prawego przeciągnięcia
![SwipeableRight](Screenshots/SwipeableRight.png "SwipeableRight")
### Widok prawego przeciągnięcia z możliwością kliknięca w opcje 'Opcja1' (widok przyciskanego elementu) i 'Opcja2' (widok normalny)
![SwipeableRight2](Screenshots/SwipeableRight2.png "SwipeableRight2")
