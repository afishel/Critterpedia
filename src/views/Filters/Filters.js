import { mapState, mapActions, mapGetters } from 'vuex';
import InputBells from '../../components/Input/Bells/Bells.vue';
import InputHours from '../../components/Input/Hours/Hours.vue';
import InputMonths from '../../components/Input/Months/Months.vue';
import hours from '../../utils/hours';

export default {
  name: 'Filters',
  components: {
    InputBells,
    InputHours,
    InputMonths,
  },
  computed: {
    ...mapState({ filterHours: (state) => state.hours }),
    ...mapGetters(['prices']),
    hourStartPos() {
      const fullDay = 24 * 60 * 60;
      const current = (this.hourStart / 100) * 60 * 60;
      const pos = (current / fullDay) * 100;
      return `${pos}%`;
    },
    hourEndPos() {
      const fullDay = 24 * 60 * 60;
      const current = (this.hourEnd / 100) * 60 * 60;
      const pos = (current / fullDay) * 100;
      return `${pos}%`;
    },
    time() {
      const fullDay = 24 * 60 * 60;
      const hour = this.date.getHours() * 60 * 60;
      const minute = this.date.getMinutes() * 60;
      const second = this.date.getSeconds();
      const current = second + minute + hour;
      return current / fullDay;
    },
  },
  data() {
    return {
      dragging: false,
      hours,
      hoursCurrent: false,
      hourStart: 0,
      hourEnd: 2400,
    };
  },
  methods: {
    ...mapActions(['changeBells', 'changeHours', 'changeShowFilters']),
    close() {
      this.changeShowFilters(false);
    },
    dragTo(price) {
      if (this.dragging !== false && price) {
        if ((this.dragging && price > this.bells[0])
        || (!this.dragging && price < this.bells[1])
        ) {
          const bells = [...this.bells];
          bells[this.dragging] = price;
          this.changeBells(bells);
        }
      }
    },
    stopDragging() {
      this.dragging = false;
    },
  },
  watch: {
    date: {
      immediate: true,
      handler(val) {
        if (this.hoursCurrent) {
          const hourStart = val.getHours() * 100;
          const hourEnd = (val.getHours() + 1) * 100;
          this.changeHours([hourStart, hourEnd]);
        }
      },
    },
    hoursCurrent(val) {
      if (!val) this.changeHours([0, 2400]);
    },
    prices: {
      immediate: true,
      handler(val) {
        this.changeBells([
          val[0],
          val[val.length - 1],
        ]);
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.stopDragging);
  },
  beforeMount() {
    window.addEventListener('mouseup', this.stopDragging);
  },
};
