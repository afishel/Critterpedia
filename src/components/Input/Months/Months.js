import { mapState, mapActions } from 'vuex';
import months from '../../../utils/months';

export default {
  name: 'Months',
  computed: {
    ...mapState(['date']),
    ...mapState({
      filtered: (state) => state.months,
    }),
    filterMonths: {
      set(m) {
        this.changeMonths(m);
      },
      get() {
        return this.filtered;
      },
    },
  },
  data() {
    return {
      current: false,
      months,
      selected: [],
      previous: [],
    };
  },
  methods: {
    ...mapActions(['changeMonths']),
  },
  watch: {
    current(val) {
      if (val) this.previous = [...this.filtered];
      else this.changeMonths([...this.previous]);
    },
    date: {
      immediate: true,
      handler(val) {
        const month = val.getMonth() + 1;
        if (this.current) this.changeMonths([month]);
      },
    },
    filterMonths: {
      immediate: true,
      handler(val) {
        this.selected = [...val];
      },
    },
  },
};
