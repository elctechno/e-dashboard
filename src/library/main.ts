import type { App, Plugin } from 'vue';
import { ECard, ESeparator, ECardGroup , EButton, ECalendar, EInput, ESpinner, EDropdown} from "@/library/index";
import '@/assets/scss/main.scss'

const components = [ ECard, ECardGroup, ESeparator,EButton, ECalendar, EInput, ESpinner, EDropdown]


const install = function installFrontendUi(Vue: App ) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

export { ECard, ECardGroup, ESeparator,EButton, ECalendar, EInput, ESpinner, EDropdown };

export default  install ;