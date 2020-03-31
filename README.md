# Be The Hero app

Application developed during Omnistack Week #11. It's based on:

- REST API written with ExpressJS
- Web UI made with React
- Mobile UI made with React Native for use with Expo

## Project setup

Download or clone the repository to the destination folder of your choice, then use yarn (recomended) or npm to install it:

```
yarn install
npm install --save
```

## Compiles and hot-reloads

You will need one terminal for each part of the application:

### Back-End

With a terminal on the root folder (/omnistack11), run the API script:

```
yarn dev
npm run dev
```

### Web UI

With the API running, run another terminal on the "frontend" folder
(/omnistack11/frontend), run the service script:

```
yarn start
npm run start
```

This will open your browswer on [http://localhost:3000] with the application
communicating the API (which runs on port 3333)

### Mobile UI

The mobile UI is assisted by [Expo](https://docs.expo.io/versions/latest/),
which provides mobile applications for both
[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
and [iOS](https://apps.apple.com/br/app/expo-client/id982107779)
which run Android Native as is.

To access the mobile app, you need to intall Expo on your device. Then, with the
API running, on another terminal on the "mobile" folder (/omnistack11/mobile),
execute either:

```
yarn start
npm run start
```

The server will open your browser on the server, and you can connect your device
to it with the QR code. If LAN configuration doesn't work, change to tunnel and
try again.

Special thanks to [Rocketseat](https://rocketseat.com.br/), which guided me and
so many others through the learning process.

Check them here on [Github](https://github.com/Rocketseat)
