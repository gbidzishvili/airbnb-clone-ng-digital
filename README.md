# AirbnbCloneNgDigital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

"# airbnb-clone-ng-digital"

## Application structure

graph TB
A[app]
A --> B[core]
B --> C[guard]
B --> D[interceptors]
B --> E[models]
B --> F[services]
B --> G[core.module.ts]
A --> H[navigation]
H --> I[components]
H --> J[navigation.module.ts]
A --> K[shared]
K --> L[components]
K --> M[directives]
K --> N[modals]
K --> O[modules]
K --> P[pipes]
K --> Q[shared.module.ts]
A --> R[views]
R --> S[authorization]
R --> T[confirm-reservation-pg]
R --> U[details-pg]
R --> V[home-pg]
R --> W[services]
R --> X[app-routing.module.ts]
R --> Y[app.component.html]
R --> Z[app.exe.component.scss]
R --> AA[app.component.spec.ts]
R --> AB[app.component.ts]
R --> AC[app.module.ts]

## Libraries

-   ngneat/until-destroy - provides a way to manage subscriptions automatically
-   angular material

#Author

Giorgi Bidzishvili

## License

[MIT License](LICENSE)
