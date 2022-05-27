# Micro FrontEnds
## O que são micro front ends:

Basicamante é conseguires dividir várias features em pastas diferentes e com o webpack
ires buscar essas mesmas referencias:

no webpack.config.js:
````
exposes: {
    "./Header": "./src/Header.jsx",
    "./Footer": "./src/Footer.jsx"    
}
````
e depois ir buscar atraves do url:
````
localhost:3000/remoteEntry.js
````

e no webpack.config.js do que queres utilizar as feature do home ou footer:
````
remotes: {
"home@http://localhost:3000/remoteEntry.js"
}
````
## Module Federation
Ver o diagrama architucture para entender como fazer de várias maneiras 

![The San Juan Mountains are beautiful!](/image.psd.png "San Juan Mountains")


## Erros

Cuidado com os s3 e ter cuidado com api contractor se alguem mudar isso em outra equipa
Usar error boundaries para teres um backup para quem faça asneiras e troque a api contrctor

error boundaries basicamente é uma react classe basica só para saber que deu errado

Dá para user npm e module federation mas não sei até que ponto compensa ter isso tudo




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
