# react-boilerplate

## run

```bash
$ npm start
```

## run storybook

```bash
$ npm start storybook
```

## build

```bash
$ npm run build
```

## build storybook

```bash
$ npm run build-storybook
```

## redux stateless component usage

Dispatch an event:

```ts
import { useDispatch } from "react-redux";

...

const dispatch = useDispatch();

...

dispatch({ type: "ACTION_NAME", payload: {} });
```
