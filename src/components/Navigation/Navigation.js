import { mapActions, mapState } from 'vuex';
import { INSECT, FISH } from '../../utils/types';
import Icon from '../Icon/Icon.vue';
import EventBus from '../../utils/event-bus';

export default {
  name: 'Navigation',
  computed: {
    ...mapState(['type']),
  },
  components: {
    Icon,
  },
  data() {
    return {
      INSECT,
      FISH,
    };
  },
  methods: {
    ...mapActions(['changeType']),

    showInsects() {
      this.changeType(INSECT);
    },

    showFish() {
      this.changeType(FISH);
    },
    onkeyup(code) {
      const action = this.type === INSECT ? 'showFish' : 'showInsects';
      if (code === 65 || code === 68) this[action]();
    },
  },
  beforeDestroy() {
    EventBus.$off('keyup', this.onkeyup);
  },
  beforeMount() {
    EventBus.$on('keyup', this.onkeyup);
  },
};
