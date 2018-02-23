import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listDate = [
    {
      create_date: '2017-08-30 20:29:33',
      state: 20,
      estimate: 1800,
      title: 'Возобновить диалог',
      description: 'Если клиент что-то спросил - вы ответили - не нужно на этом прекращать общение. Через сутки после добавления запроса в систему появляется задача снова написать клиенту. Если мы видим, что ему раз можно написать - ставим задачу на отсрочку на завтра, чтобы не забыть. Если мы видим, что клиенту больше нет смысла писать - закрываем задачу',
      priority: 10
    },
    {
      create_date: '2017-09-21 22:55:23',
      state: 20,
      estimate: 3600,
      title: 'Внести табеля в приложение',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-29 01:37:37',
      state: 20,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-27 09:27:02',
      state: 10,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-22 10:59:18',
      state: 20,
      estimate: 3600,
      title: 'Задача для РМ',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-18 05:19:55',
      state: 10,
      estimate: 120,
      title: 'Сформулировать задачу РМ',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-08-31 08:41:33',
      state: 30,
      estimate: 1800,
      title: 'Задача для РМ',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-28 11:07:34',
      state: 10,
      estimate: 300,
      title: 'Внести данные пробного - ',
      description: 'На время выполнения этой задачи ребенок уже должен быть в графике пробников',
      priority: 10
    },
    {
      create_date: '2017-09-01 22:24:31',
      state: 20,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-07 19:36:11',
      state: 0,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-06 00:39:35',
      state: 10,
      estimate: 900,
      title: 'Запустить новый аудиофайл - Кудри',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-22 16:55:09',
      state: 20,
      estimate: 1800,
      title: 'Проведение собеседования HR',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-23 09:46:08',
      state: 10,
      estimate: 900,
      title: 'Запланировать работу с проблемными операторами',
      description: 'Запланировать работу - это значит, выделить время на общение с оператором / операторами на проработку проблемных моментов. Это может быть личная встреча или конференция по скайпу.  Результат задачи - описание планов - кто с кем когда и как. ',
      priority: 20
    },
    {
      create_date: '2017-09-13 21:23:41',
      state: 10,
      estimate: 300,
      title: 'Внести данные пробного - ',
      description: 'На время выполнения этой задачи ребенок уже должен быть в графике пробников',
      priority: 20
    },
    {
      create_date: '2017-09-10 06:37:35',
      state: 10,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-18 09:15:17',
      state: 20,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-08 20:28:38',
      state: 0,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-08-30 19:55:10',
      state: 30,
      estimate: 60,
      title: 'Добавить тип штрафа',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-27 14:38:32',
      state: 0,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-23 11:33:25',
      state: 10,
      estimate: 600,
      title: 'Написать ТЗ для добавление в приложение',
      description: 'Какое-то экстренное мероприятие / акция / конкурс и так далее',
      priority: 20
    },
    {
      create_date: '2017-09-07 16:10:19',
      state: 30,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-26 16:26:07',
      state: 0,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 10
    },
    {
      create_date: '2017-09-02 04:58:25',
      state: 10,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-03 17:36:12',
      state: 30,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-18 15:03:23',
      state: 30,
      estimate: 3600,
      title: 'Описание вакансии',
      description: 'Описание вакансий для разных каналов: порталы работы, сайты обьявлений, соц сети, linkedin (зависит от вакансии)',
      priority: 20
    },
    {
      create_date: '2017-09-24 01:18:38',
      state: 0,
      estimate: 900,
      title: 'Заполнить табель офисный каждодневный',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-25 18:26:44',
      state: 10,
      estimate: 1200,
      title: 'Заявка на вакансию',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-16 15:43:19',
      state: 10,
      estimate: 120,
      title: 'Сформулировать задачу РОП',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-10 04:53:20',
      state: 10,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-02 19:13:15',
      state: 0,
      estimate: 300,
      title: 'Добавить контакт',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-11 08:53:38',
      state: 10,
      estimate: 3600,
      title: 'Отметить родителей',
      description: 'После публикации фотографий нужно отметить родителей. Результат задачи - ссылка на пост, где отмечены родители. Если некого было отмечать - поле оставляем пустым',
      priority: 20
    },
    {
      create_date: '2017-09-21 15:14:18',
      state: 10,
      estimate: 7200,
      title: 'Сделать закупку',
      description: 'Согласно утвержденной сметы нужно сделать закупку материалов. ',
      priority: 10
    },
    {
      create_date: '2017-09-04 20:14:53',
      state: 10,
      estimate: 900,
      title: 'Запись на собеседование',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-05 18:44:16',
      state: 10,
      estimate: 900,
      title: 'Запись на собеседование',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-25 00:48:08',
      state: 30,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 10
    },
    {
      create_date: '2017-09-05 23:23:36',
      state: 20,
      estimate: 600,
      title: 'Задача для директора',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-09 11:59:43',
      state: 10,
      estimate: 120,
      title: 'Сформулировать задачу фин.дир.',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-27 05:42:03',
      state: 10,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 20
    },
    {
      create_date: '2017-09-10 11:03:25',
      state: 30,
      estimate: 300,
      title: 'Позвонить контакту - ',
      description: 'Если отказ или не качественный - дату следующего контакта можно поставить любую - он на перезвон не подтянется.',
      priority: 10
    },
    {
      create_date: '2017-09-20 07:36:39',
      state: 20,
      estimate: 120,
      title: 'Сформулировать задачу директору',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-27 09:36:20',
      state: 10,
      estimate: 120,
      title: 'Сформулировать задачу HR',
      description: '...',
      priority: 10
    },
    {
      create_date: '2017-09-21 11:15:19',
      state: 20,
      estimate: 120,
      title: 'Сформулировать задачу фин.дир.',
      description: '...',
      priority: 20
    },
    {
      create_date: '2017-09-12 01:18:27',
      state: 10,
      estimate: 600,
      title: 'Задача для фин.дир.',
      description: '...',
      priority: 20
    }
  ];


}
