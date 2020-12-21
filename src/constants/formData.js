export const myTasksData = [
'Поменять электропроводку',
'Убрать квартиру',
'Покрасить стены',
'Поменять кран',
]

export const taskFormData = {
  title: 'Заявка на ремонт',
  workType: 'Мне нужно',
  workSubtype: 'Подробнее, что нужно',
  workDescription: 'В нескольких словах, что именно нужно',
  name: 'Имя заявителя',
  phone: 'Телефон заявителя',
  email: 'e-mail заявителя'
}

export const taskFormPlaceholders = {
  workDescription: 'Опишите работу',
  clientName: 'Введите свое имя',
  clientPhone: 'Введите телефон',
  clientEmail: 'Введите email',
  clientFeedback: 'Оставьте отзыв после выполнения работы'
}

export const taskButtonPlaceholders = {
  confirmed: 'В работе',
  notConfirmed: 'Ожидает мастера',
  finished: 'Выполнена',
  notFinished: 'Не выполнена'
}

export const taskFormLabels = {
  workType: 'Услуга',
  workSubtype: 'Подкатегория услуги',
}

export const alertPopupData = {
  dataCardDelete: 'Вы действительно хотите удалить заявку?',
  dataFormClose: 'Вы действительно хотите отменить оформление заявки?'
}

export const taskFormTypeList = [
  'Электрика',
  'Сантехника',
  'Отделочные работы',
  'Мебель, двери, окна',
  'Компьютерная помощь',
  'Уборка',
]

export const taskFormSubtypeList = [
  [
    'Установка или замена розеток',
    'Ремонт электропроводки',
    'Замена оборудования',
    'Ремонт электроприборов'
  ],
  [
    'Ремонт сантехнических приборов',
    'Установка или замена сантехнических приборов',
    'Устранение засоров и прочистка фильтров',
    'Ремонт или замена трубопроводов и арматуры',
    'Ремонт или замена отопительных приборов'
  ],
  [
    'Поклейка обоев',
    'Покраска стен и потолка',
    'Укладка плитки',
    'Комплексная подготовка и отделка помещений'
  ],
  [
    'Сборка мебели',
    'Установка дверей',
    'Установка окон',
    'Остекление балконов',
    'Навешивание полок и фурнитуры'
  ],
  [
    'Помощь в покупке компьютера',
    'Установка и удаление программ',
    'Ремонт и замена оборудования',
    'Подключение и настройка интернета'
  ],
  [
    'Комплексная уборка помещения',
    'Мытье окон',
    'Прачечная'
  ],
]

export const buttonData = {
  save: 'Сохранить',
  delete: 'Удалить',
  submit: 'Отправить'
}
