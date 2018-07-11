Habitat is a real estate platform that aims to take agents and agencies out of the equation in favour of facilitating direct, human to human interaction between tenants and landlords. The idea is to eventually use smart contracts, and put deposits in escrow for the tenancy period, which will both reduce scams/fraudulent behaviours and increase security between both stakeholders.

## Table of Contents


* [Getting started](#getting-started)
* [Progress](#progress)
* [Tech stack](#tech-stack)
* [Contributions](#contributions)
* [Author](#author)
* [License](#license)
* [Backend](#backend)
 
## Getting started

1. Fork the repo

```
https://github.com/viiralt/habitat-client
```
2. Clone the repo locally. In a terminal window, run: 

```
git clone https://github.com/[your-github-profile-name]/habitat-client.git
```
3. Install dependencies 

```
npm install
```
4. Run the simulator of choice. Please note that the iOS simulator requires [XCode](https://developer.apple.com/xcode/) while Android requires Android Studio[https://developer.android.com/studio/]
```
npm run ios simulator
```
or 
```
npm run android
```
Also note that the app is currently optimised for iPhone X.

## Progress

This project is a day 0 eject from Expo.
I'm currently in the process of refactoring the entire frontend by removing redundancies and impoving modularity/reusability in all components. Currently there may be strange bugs where the bundle.js fails, and build can only be achieved via XCode and not by running the terminal script.

### Tech Stack

React Native - Redux/Thunk - Styled Components

### Contributions

...are more than welcome. Fork, clone and get at it. Pull request to the original dev branch whenever.

### Author

Henri Viiralt - [Github](https://github.com/viiralt/) - [LinkedIn](https://www.linkedin.com/in/viiralt/)

### Backend 

The backend of this project can be found [here](https://github.com/viiralt/habitat-server)

### License

MIT
