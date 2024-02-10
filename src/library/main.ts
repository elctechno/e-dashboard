import type { App, Plugin } from 'vue';
import { ECard, ESeparator, ECardGroup } from "@/library/index";
import '@/assets/scss/main.scss'

const components = [ ECard, ECardGroup, ESeparator]


const install = function installFrontendUi(Vue: App ) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

export { ECard, ECardGroup, ESeparator };

export default  install ;