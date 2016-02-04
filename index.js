import Vehicle from './src/vehicle';
const {log} = console;

let v1 = new Vehicle('Car', 'HY-8244');
v1.start();
log(v1.display());
