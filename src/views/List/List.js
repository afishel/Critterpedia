import { mapState } from 'vuex';
import appHeader from '../../components/Header/Header.vue';
import appFooter from '../../components/Footer/Footer.vue';
import appNavigation from '../../components/Navigation/Navigation.vue';
import critter from '../../components/Critter/Critter.vue';
import vButton from '../../components/Button/Button.vue';

export default {
  name: 'List',
  components: {
    appHeader,
    appFooter,
    appNavigation,
    critter,
    vButton,
  },
  computed: {
    ...mapState(['critters']),
  },
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    showFilters() {},
    showPictures() {},
  },
};
