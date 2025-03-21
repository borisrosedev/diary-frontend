export default function sealed(constructor:Function) {
    console.log('✅ sealed constructor:', constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}