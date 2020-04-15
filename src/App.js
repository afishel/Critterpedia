import { mapState, mapActions } from 'vuex';
import EventBus from './utils/event-bus';

export default {
  name: 'App',
  computed: {
    ...mapState(['type']),
  },
  methods: {
    ...mapActions(['filterCritters']),
    onkeyup(event) {
      EventBus.$emit('keyup', event.keyCode);
    },
  },
  watch: {
    type: {
      immediate: true,
      handler() {
        this.filterCritters();
      },
    },
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onkeyup);
  },
  beforeMount() {
    document.addEventListener('keyup', this.onkeyup);
  },
};
