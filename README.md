# Esercizio: Boolzap

```js
const contacts = [
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
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
    }
];
```

## Funzioni:

### selectChat (seleziona la chat corrente)

argomento: indice

- modifica il valore della variabile currentChat nel indice

```js
selectChat(index){
    this.currentChat = index;
}
```
---
### sendMessage (invia un messaggio)

argomento facoltativo: stringa "send"

- se non è "send"
    - aggiunge il messaggio con il testo "ok" e lo stato "received" alla chat
- altrimenti
    - aggiunge il messaggio alla chat
    - reimposta la variabile textMessage
    - aggiunge un intervallo di 1 secondo che richiama la funzione senza argomenti

```js
sendMessage('send'){
    {
        date: this.dateFn(false, 'full'),
        message: this.textMessage,
        tatus: 'sent' 
    }
}

sendMessage('send'){
    {
        date: this.dateFn(false, 'full'),
        message: 'ok',
        tatus: 'received 
    }
}
```
---
### dataFn (recupera la data)

argomenti facoltativi: il tempo preso dall'oggetto utente, type

- se type è uguale a "full"
    - restituisce la data attuale
- se è "day month year"
    - restituisce il giorno mese anno dell'messaggio
- altrimenti
    - restituisce l'orario dell'messaggio

```js
dateFn('10/01/2020 15:30:55'){
    return '15:30';
}

dateFn('10/01/2020 15:30:55', 'day month year'){
    return '10/01/2020';
}

dateFn('full'){
    return '10/01/2020 15:30:55';
}
```
---
### addZero (aggiunge uno 0 prima se il numero è inferiore a 10)

argomento: un numero

- se il numero è inferiore a 10 
    - aggiunge uno zero prima e restituisce la stringa
- altrimenti
    - restituisce lo stesso numero

```js
addZero(5){
    return '05';
}
```
---
### findUser (filtra gli utenti in base alla parola cercata)

- restituisce un array con gli utenti filtrati dalla parola presente nella variabile "searchUser"

```js
findUser(){
    return [{},{}];
}
```
---
### lastAccess (recupera l'ultimo accesso)

- recupera l'ultimo messaggio ricevuto
- se la data dell'messaggio è uguale a quella di oggi
    - restituisce "Ultimo accesso oggi alle..."
- altrimenti
    - restituisce  "Ultimo accesso il..."

```js
lastAccess(){
    return 'Ultimo accesso oggi alle 15:30';
}
```