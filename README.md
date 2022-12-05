![](https://img.shields.io/badge/version-v1.0.0-blue)
![](https://img.shields.io/badge/node-v16.13.1-green)
![](https://img.shields.io/badge/npm-8.1.2-green)
![](https://img.shields.io/badge/react-17.0.2-green)

# React Cloud Application

React Web Application

## How the Application Setup
  This application is created using Create React App as a Starter Template with Typescript
  
```
npx create-react-app dynamic-form --template typescript
```

## Setup

```
git clone https://github.com/theRizwan/ReactTest.git
```

## Usage

- npm start or yarn start
- yarn lint
- yarn test

## Documentation

### Repo

- `main`: Production Environment
- `dev`: Development Environment
- `staging`: For Demo to client
- `qa`: Testing Environment
- `Bugs`: Folder/Prefix for fixes
- `Features`: Folder/Prefix for any other tasks/user stories

`Branch Naming`

```
S<Sprint number>-TOP<User story number>-<Short Name>
S1-TOP-1-Login-Page
```

`Create a branch`
If it is a _Bug_,

1. `git checkout dev` - Make sure you are in dev branch
2. `git checkout -b Bugs/S3-TOP-25-Input-Fix` - Create a branch under Bugs folder

If it is a _Feature_,

1. `git checkout dev` - Make sure you are in dev branch
2. `git checkout -b Features/S3-TOP-25-Input` - Create a branch under Bugs folder

### Git Commiting

_Do not commit any reproducible file like `package-lock.json`_

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

This format is optional.

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: changes to documentation
- `style`: formatting, missing semi colons, etc; no code change
- `refactor`: refactoring production code
- `test`: adding tests, refactoring test; no production code change
- `chore`: updating build tasks, package manager configs, etc; no production code change

Examples

```
git commit -m "feat: Add Login component"
git commit -m "chore: Add a new package"
```

### Source Code Folder Structure

```
- .storybook/
- src/
    - components/
        - stories/
        - Component_1/
        - Component_2/
    - assets/
    - screens/
    - services/
    - utils/
```

### Components

```ts
import React from "react";

// Libraries

// Components

// Services

// Utils

// Images 

const Example: React.FunctionComponent = () => <h1>Toptech</h1>;
export default Example;
```

### User Story Template

`Estimates`: _1 point is estimated as 4 hours_

---

**As a** <type of user>
**I want to** <perform some task>
**so that I can** <achieve some goal>

**Acceptance criteria**

**Given** <some context>
**When** <some action is carried out>
**Then** <a set of observable outcomes should occur>

---

### Tools and Platforms

- `AWS` for App container
- `Azure Devops` for Tasks - [dev.azure.com](https://dev.azure.com/)

## Authors

- AuthorName | [talibrizwan13@gmail.com

## License

[MIT](./LICENSE)

