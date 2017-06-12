# MyNewapp

Progetto di test angular 2(4) con cui mi collego ad un servizio rest api node.
Lo scopo e' l'autenticazione con json web token e limitare l'accesso delle pagine.
Il progetto è in github [ng-auth-jwt](https://github.com/nicodemo71/ng-auth-jwt.git)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run on server directory `nodemon server.js`. Navigate to `http://localhost:3000`.

## http response

#### ReactiveX / rxjs
La funzione map trasforma il risultato di un observable in un altro observable.
In questo modo la response è stata trasformata in oggetto e ripropagata come observable.

La gestione delle eccezioni è stata fatta con catch e throw di questo componente.


## CSS

Semantic: [ng-semantic](https://ng-semantic.herokuapp.com/#/)

Ho utilizzato ngSemantic ed un problema per eseguire il modulo principale e' dichiararlo: import { NgSemanticModule } from 'ng-semantic/ng-semantic';
Nella pagina principale index.html dichiarare:

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>

##TODO:

spostare la cartella login con il componente di login nella cartella "views"
