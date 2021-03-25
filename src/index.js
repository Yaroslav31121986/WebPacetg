import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.components'
import './css/index.css'

console.log('Config key:', config.key);

const service = new AppService('Hello word');
service.log();