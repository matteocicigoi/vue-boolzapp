'use strict';

const { createApp } = Vue;

// profilo personale
const user = [
    {
        name: 'Sofia',
        avatar: './img/avatar_io.jpg'
    }
];

// lista utenti
const contacts = [
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
];

createApp({
  data() {
    return {
        user,
        contacts,
        currentChat: 0,
        textMessage: '',
        searchUser: ''
    }
  },
  methods: {
    // seleziona la chat in base al indice
    selectChat(index){
        this.currentChat = index;
    },
    // invia un messaggio
    sendMessage(type){
        if(type !== 'send'){
            this.contacts[this.currentChat].messages.push({
                date: this.dateFn(false, 'full'),
                message: 'ok',
                status: 'received'
            });
        }else{
            this.contacts[this.currentChat].messages.push({
                date: this.dateFn(false, 'full'),
                message: this.textMessage,
                status: 'sent'
            });
            this.textMessage = '';
            // risposta dopo 1 secondo
            setTimeout(this.sendMessage, 1000);
        }
    },
    // data
    dateFn(timeV, type){
        if(type === 'full'){
            // se type è uguale a full genera una data
            const date = new Date;
            return `${this.addZero(date.getDate())}/${this.addZero(date.getMonth())}/${date.getFullYear()} ${this.addZero(date.getHours())}:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`;
        }else if(type === 'day month year'){
            // recupera il giorno
            const time = [];
            for(let i = 0; i < 10; i++){
                time.push(timeV[i]);
            }
            return time.join('');
        }
        // recupera i l'ora e i minuti
        const time = [];
        for(let i = 11; i < 16; i++){
            time.push(timeV[i]);
        }
        return time.join('');
    },
    addZero(number){
        if(number < 10){
            return ('0' + String(number));
        }
        return number;
    },
    // ricerca
    findUser(){
        return this.contacts.filter((user) => user.name.toLowerCase().includes(this.searchUser.toLowerCase()));
    },
    // ultimo accesso
    lastAccess(){
        const messages = this.contacts[this.currentChat].messages;
        let i = messages.length - 1;
        let  access = null;
        while(i >= 0){
            if(messages[i].status === 'received'){
                access = messages[i].date;
                break;
            }
            i--;
        }
        const date = new Date;
        const dateMessage = this.dateFn(access, 'day month year')
        if(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` === dateMessage){
            return `Ultimo accesso oggi alle ${this.dateFn(access)}`;
        };
        return `Ultimo accesso il ${dateMessage}`;
    }
}
}).mount('#app');