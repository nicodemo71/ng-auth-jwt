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
+ npm install ng-semantic --save

Inserire in index.html:

```html
<link rel="stylesheet" type="text/css"
href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">
.
.
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>
```
## Webpack Semantic Troubleshooting 

<span style="color: red;">ERROR in NgSemanticModule is not an NgModule</span>

add the following to the file ng-semantic.d.ts in the ng-semantic node package

import { NgModule } from '@angular/core';

...

@NgModule({
    declarations: [
        NgSemanticModule
    ]
})
export declare class NgSemanticModule {
}

##AngularFire2 Troubleshooting:

Dopo aver installato AngularFire2 per la versione Angular2 installare il modulo:
npm install promise-polyfill --save-exact


