## The Doggo App

This is the Doggo App, the application for getting to know dogs by different breeds and sub-breeds.
This is actually a home-assignment done and developed under the name "Doggo" using **React.js** and **Next.js** as a part of an interview for a company.

---

## Project structure

The project structure is as follows:

- `app` - the main app folder containing all source code
  - `__mocks__` - the folder containing mock data for the tests
  - `__test__` - the folder containing actual unit and integration tests
  - `about` - the folder containing the about route page
  - `components` - the folder containing main components
  - `queries` - the folder containing queries made to retrieve breeds data and dogs images
  - `types` - the folder containing data types and interfaces
  - `ui-kit` - the folder containing smaller util components (CTA components) shared across main components
  - `[other files]` - like the homepage file, layout file, custom 404 page and global css
- `public` - the folder containing image assests used as background images
- `[other files and folders]` - test, next.js and typescript config files

---

## Starting the app

Prior to starting any app in Node.js you have to install the needed packages for the app itself by running the command `npm install` and then you can start the app by using the `npm run dev` command and it will be available locally at the `3000` port.
Another way is to run a production build by entering in the console the `npm run build` command and then starting the server with `npm start`.
To run the tests written in **jest** you can run the `npm run test` command in the terminal and the tests should be executed.

---

## Docker

This project provides the ability of being executed in a docker container.
All you have to do is to build the container with the command `docker build -t [instance-name] [build-directory]` and then later on start the container by executing the command `docker run -dp [external-port]:[internal:port] [instance-name]` after which you should be able to access you application at the specified port.

To have a look at the running containers in docker you can execute the following command: `docker ps`.
