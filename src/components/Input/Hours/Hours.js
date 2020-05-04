import { mapState, mapActions } from 'vuex';
import hours from '../../../utils/hours';
import Icon from '../../Icon/Icon.vue';


const fullDay = 24 * 60 * 60;
const getSeconds = (time) => ((time / 100) * 60 * 60);
const percentage = (time) => (((time / fullDay) * 100));

export default {
  name: 'Hours',
  components: {
    Icon,
  },
  computed: {
    ...mapState(['date']),
    ...mapState({ filterHours: (state) => state.hours }),
    startPos() {
      return `${percentage(getSeconds(this.filterHours[0]))}%`;
    },
    endPos() {
      return `${percentage(getSeconds(this.filterHours[1]))}%`;
    },
    hourSpan() {
      const span = this.filterHours[1] - this.filterHours[0];
      return `${percentage(getSeconds(span))}%`;
    },
    time() {
      const hour = this.date.getHours() * 60 * 60;
      const minute = this.date.getMinutes() * 60;
      const second = this.date.getSeconds();
      const current = second + minute + hour;
      return current / fullDay;
    },
  },
  data() {
    return {
      hours,
      current: false,
      dragging: false,
      previous: [0, 2400],
    };
  },
  methods: {
    ...mapActions(['changeHours']),
    dragTo(hour) {
      if (this.dragging !== false && Number.isInteger(hour)) {
        if ((this.dragging && hour > this.filterHours[0])
        || (!this.dragging && hour < this.filterHours[1])) {
          const times = [...this.filterHours];
          times[this.dragging] = hour;
          this.changeHours(times);
        }
      }
    },
    stopDragging() {
      this.dragging = false;
    },
  },
  watch: {
    current(val) {
      if (!val) this.changeHours([...this.previous]);
      else this.previous = [...this.filterHours];
    },
    date: {
      immediate: true,
      handler(val) {
        if (this.current) {
          const hour = val.getHours();
          const start = hour * 100;
          const end = ((hour + 1) * 100);
          this.changeHours([start, end]);
        }
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
