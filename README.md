Title: Vue To Do List
===
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
Bonus:
1- esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3- rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente
4- Se la lista è vuota stampare “Non sono presenti task” al posto della lista


## SVOLGIMENTO: 
1. per stampare in pagina creo un ciclo v-for che mi restituirà l'elemento e l'indice 
2. aggiungo al il v.bind alla classe con la condizione (se isDone = true allora sarà aggiunta la classe)
3. creo una funzione che chiamo deleteTask nella quale, grazie a splice, cancello l'elemento selezionato dall'array e la richiamo al click sul cestino
4. inizializzo un nuovo oggetto con due elementi, text e isDone
5. creo una funzione addTask per aggiungere la nuova task all'array utilizzando unshift per metterlo all'inizio dell'array 
6. richiamo nella funzione l'oggetto per pulire il campo di input
7. creo l'evento click al bottone e richiamo la funzione addTask 
8. creo l'evento keyup.enter al campo input e richiamo la funzione
9. aggiungo al campo input il v-model per 'ricevere' il testo inserito e aggiungo .trim per far cancellare gli spazi prima e dopo la stringa

### BONUS 1
1. Creo un controllo con if per controllare se la stringa inserita dall'utente è lunga almeno 4 caratteri.
2. creo inizializzo un elemento che userò pper il v-model dell'input
3. all'interno della funzione addTask all'interno dell'oggetto associo text all'elemento inizializzato in precedenza
4. faccio il controllo 


### BONUS 2
1. 


### BONUS 3
1. 


### BONUS 4
1. 