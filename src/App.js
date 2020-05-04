import { mapState, mapActions } from 'vuex';
import EventBus from './utils/event-bus';
import Filters from './views/Filters/Filters.vue';

export default {
  name: 'App',
  components: {
    Filters,
  },
  computed: {
    ...mapState(['date', 'showFilters', 'type']),
  },
  methods: {
    ...mapActions(['changeDate', 'filterCritters']),
    onkeyup(event) {
      // console.log(event.keyCode);
      EventBus.$emit('keyup', event.keyCode);
    },
    timer() {
      setTimeout(() => {
        this.changeDate();
        this.timer();
      }, 1000);
    },
  },
  watch: {
    date() {
      this.filterCritters();
    },
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
    this.timer();
  },
};
