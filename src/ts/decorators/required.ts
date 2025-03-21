import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
 
export function required(target: object, propertyKey: string | symbol, parameterIndex: number) {
  console.log('required target', target, propertyKey, parameterIndex);
  console.log('required propertyKey',propertyKey, parameterIndex);
  console.log('required parameterIndex',parameterIndex);
  
  const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
 
export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value!;
  console.log('validate target', target);
  console.log('validate propertyName',propertyName);
  console.log('validate description',descriptor);
  
  descriptor.value = function () {
    const requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }
    return method.apply(this, arguments);
  };
}