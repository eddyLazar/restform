# restform.js 

A lightweight, easy-to-use jQuery plugin for sending AJAX `POST` request to given `url`, on form submit with form data. Sending files also availible.



## Usage

### Initialization & Settings

```javascript
  $('#testForm').restForm({
    url: '/url/to/form/handler',
    additionalFormData: {
      param1: 'foo',
      param2: 'bar'
    }
  });
```

##Events

RestForm plugin triggers.

- `form:loading:start` triggers when user click submit, just before ajax call starts

- `form:loading:end` triggers when ajax call is finished



##Options

- `url` request url

- `additionalFormData` additional form data to send

- `formValid` this function is called before starting request, if `false` request won't be started, default : `true`. Accepts `el`(a form jquery instance) as a first argument.
- `triggerStartName` trigger event name, default `form:loading:start`
- `triggerEndName` trigger event name, default `form:loading:end`
- `headers` custom request headers


##Install
###npm
`npm install restform`



##License

The MIT License (MIT)

Copyright (c) 2016 Virgiliu Diaconu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.