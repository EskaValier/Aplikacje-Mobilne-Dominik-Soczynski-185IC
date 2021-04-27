# Lab. nr 4 - obsługa danych wprowadzanych przez użytkownika + modale

### do działania należy uruchomić:
- npm install @react-navigation/native
- npm install @react-navigation/drawer
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install @react-native-picker/picker
- npm install @react-native-community/datetimepicker


### Zadanie wykorzystuje:
- komponentem TextInput w React Native,
- obsługą komponentu TextInput w React Native,
- obsługą komponentu DatePicker w React Native,
- obsługą komponentu Picker w React Native,
- obsługą komponentu Switch w React Native,
- obsługą komponentu Modal w React Native,
- obsługą komponentu Alert w React Native,
- dokumentacją ToastAndroid API w RN.

### Zagadnienia do zrealizowania:
- wskazane użycie kodu z lab. nr 2, po to żeby mieć kilka ekranów 🌞
- na pierwszym ekranie należy zaimplementować "przegląd" możliwości komponentu 'TextInput'; należy wykorzystać odpowiednie propsy i/lub stan danego komponentu.
- na drugim ekranie należy zaimplementować obsługę co najmniej dwóch komponentów 'Select'; niech zmiana w jednym selektorze powoduje zmiany w pozostałych selektorach; można pokusić się o pobieranie danych do selektorów z wybranych API (np. z ćwiczeń dotyczących asynchronicznego Javascript).
- na trzecim ekranie należy zaimplementować obsługę przełącznika 'Switch', tak aby po zmianie jego położenia pojawiał się modal z pseudolosową liczbą.
- na czwartym ekranie należy zaimplementować wybór daty i czasu; po wciśnięciu przycisku 'Wyświetl termin' powinien pojawić się alert z wybranymi parametrami czasowymi.
- na piątym ekranie należy zaimplementować "aktywny" modal + pasywne powiadomienia za pomocą ToastAndroid (lub jego odpowiednika w iOS); można wykorzystać funkcję setTimeout() na czas trwania obietnicy (Promise) i w tym czasie powinien być aktywny modal; ww. powiadomienie powinno się pojawić po rozwiązaniu obietnicy (resolve of Promise object).

### Widok nawigacji wykonanej przy pomocy drawer-navigation (rozbudowa aplikacji z Lab2, dodane nowe podstrony)
![Menu](Screenshots/Menu.png "Menu")

### Widok elementu TextInput wraz z ustawionymi różnymi parametrami
![TextInput1](Screenshots/TextInput1.png "TextInput1")
![TextInput2](Screenshots/TextInput2.png "TextInput2")
![TextInput3](Screenshots/TextInput3.png "TextInput3")
![TextInput4](Screenshots/TextInput4.png "TextInput4")

### Widok elementu Select wraz z ustawionymi różnymi parametrami
![Select](Screenshots/Select.jpg "Select")

### Widok elementu Switch który losuje liczbę z zakresu 1-1000
![Switch1](Screenshots/Switch1.png "Switch1")
### Wynik uruchomienia Switcha
![Switch2](Screenshots/Switch2.png "Switch2")
 
### Widok elementu DateTimePicker którym możemy ustawić datę i godzinę, a następnie wyświetlić ustawione parametry
![DateTimePicker1](Screenshots/DateTimePicker1.png "DateTimePicker1")
### Wybór daty
![DateTimePicker2](Screenshots/DateTimePicker2.png "DateTimePicker2")
### Wybór godziny i minuty
![DateTimePicker3](Screenshots/DateTimePicker3.png "DateTimePicker3")
### Wyświetlenie wybranych parametrów
![DateTimePicker4](Screenshots/DateTimePicker4.png "DateTimePicker4")

### Widok elementu ToastAndroid któy losuje czas między 1-6 sekund, wyświetla wylosowany czas i wraca do ekranu gdzie można ponownie uruchomić funkcję
![ToastAndroid](Screenshots/ToastAndroid.png "ToastAndroid")
### Wylosowany czas wraz z powiadomieniem
![ToastAndroid2](Screenshots/ToastAndroid2.png "ToastAndroid2")
