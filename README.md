
## TS

## Decorator 

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 


Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.


### Example

For example, given the decorator @sealed we might write the sealed function as follows:

```ts
function sealed(target) {
  // do something with 'target' ...
}
``` 

### Decorator Factories

If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. 



A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.

We can write a decorator factory in the following fashion:

```ts
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
```


## Webpack

Webpack est un outil logiciel open-source de type « module bundler », conçu pour faciliter le développement et la gestion de sites et d'applications web modernes.


## Progressive Web Applications

Progressive Web Applications (or PWAs) are web apps that deliver an experience similar to native applications. 


There are many things that can contribute to that. Of these, the most significant is the ability for an app to be able to function when offline. This is achieved through the use of a web technology called Service Workers.


## Proxying some URLs

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

The dev-server makes use of the powerful http-proxy-middleware package. 

Check out its documentation for more advanced usages. Note that some of http-proxy-middleware's features do not require a target key, e.g. its router feature, but you will still need to include a target key in your configuration here, otherwise webpack-dev-server won't pass it along to http-proxy-middleware.

With a backend on localhost:3000, you can use this to enable proxying: