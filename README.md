- Для розділення розрядів у представлені кількості підписників написав свою функцію і тепер можна відокремлювати тисячі будь-якими знаками, як наприклад апостроф, але можна було, звісно просто використати number.toLocaleString('en') щоб додати кому, але я пішов кастомним шляхом))

- Додавання кількості підписників, звичайно було б реалізоване через запит до бекенду, а так як це тестове завдання не його передбачає, то я просто збільшив на одного підписника.

- Стилізацію можна було б зробити через сторонню бібліотеку, такштал "emotions" або "styled-components", але тут я вирішив обмежитись інлайновими стилями, бо компонент "TweetCard" виконує фактично функцію стилізації. Думаю в реальному проекті по типу соцмережі взагалі б використовувалась велика бібліотека стилізованих компонентів як "Bootstrap" чи "MaterialUI".