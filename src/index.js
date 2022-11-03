import testingFunc from './components/TestModule';
import './sass/main.scss';
import logo from './assets/imsamaritan.png';

const moduleTestString = testingFunc();
console.log(moduleTestString.toLocaleUpperCase());