# react-form
[![Build Status](https://travis-ci.org/doctolib/react-form.svg?branch=master)](https://travis-ci.org/doctolib/react-form)
[![Dependency Status](https://david-dm.org/doctolib/react-form.svg?theme=shields.io)](https://david-dm.org/doctolib/react-form)
[![devDependency Status](https://david-dm.org/doctolib/react-form/dev-status.svg?theme=shields.io)](https://david-dm.org/doctolib/react-form#info=devDependencies)

Set of React form components based on react-formsy.

## Install

```
npm install @doctolib/react-form
```

## Usage

### Form

Refer to [formsy-react](https://github.com/christianalfoni/formsy-react#how-to-use).

```js
import {Form} from '@doctolib/react-form';
const Component = () => <Form/>;
```

### Input

Input component.

```js
import {Input} from '@doctolib/react-form';
const Component = () => <Input name="firstname"/>;
```

### Textarea

Textarea component.

```js
import {Textarea} from '@doctolib/react-form';
const Component = () => <Textarea name="comment"/>;
```

### Select

Select component.

```js
import {Select} from '@doctolib/react-form';
const Component = () => <Select options={{value: 'Label'}} name="select"/>;
```

## License

MIT
