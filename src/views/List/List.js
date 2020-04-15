import { mapState } from 'vuex';
import appHeader from '../../components/Header/Header.vue';
import appFooter from '../../components/Footer/Footer.vue';
import appNavigation from '../../components/Navigation/Navigation.vue';
import critter from '../../components/Critter/Critter.vue';

export default {
  name: 'List',
  components: {
    appHeader,
    appFooter,
    appNavigation,
    critter,
  },
  computed: {
    ...mapState(['critters']),
  },
  data() {
    return {
      focused: false,
    };
  },
};
