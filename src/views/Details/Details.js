import { mapState } from 'vuex';
import { NORTHERN_HEMISPHERE } from '../../utils/types';
import appHeader from '../../components/Header/Header.vue';
import appFooter from '../../components/Footer/Footer.vue';
import icon from '../../components/Icon/Icon.vue';
import tag from '../../components/Tag/Tag.vue';
import months from '../../utils/months';
import hours from '../../utils/hours';
import vButton from '../../components/Button/Button.vue';
import eventBus from '../../utils/event-bus';

export default {
  name: 'Details',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    appHeader,
    appFooter,
    icon,
    tag,
    vButton,
  },
  computed: {
    ...mapState(['critters', 'date', 'fish', 'insects', 'hemisphere']),
    month() {
      return this.date.getMonth();
    },
    months() {
      const allYear = this.critter.months === -1;
      const hemisphere = this.hemisphere === NORTHERN_HEMISPHERE ? 0 : 1;
      const critterMonths = this.critter.months[hemisphere];
      const seasonality = months.map((month, i) => ({
        name: month,
        checked: allYear || critterMonths.includes(i + 1),
      }));
      return seasonality;
    },
    next() {
      let idx = this.critters.findIndex((critter) => critter.name === this.id);
      if (idx >= this.critters.length - 1) idx = -1;
      return this.critters[idx + 1];
    },
    prev() {
      let idx = this.critters.findIndex((critter) => critter.name === this.id);
      if (idx <= 0) idx = this.critters.length;
      return this.critters[idx - 1];
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
      hours,
      critter: {},
    };
  },
  methods: {
    checkKey(code) {
      if (code === 39 || code === 68) this.goNext();
      if (code === 37 || code === 65) this.goPrevious();
    },
    goNext() {
      this.$router.push({ name: 'Details', params: { id: this.next.name } });
    },
    goPrevious() {
      this.$router.push({ name: 'Details', params: { id: this.prev.name } });
    },
    showAll() {
      this.$router.push({ name: 'List' });
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        const critter = this.fish.find((fish) => fish.name === id)
          || this.insects.find((insect) => insect.name === id);

        if (!critter) this.$router.replace({ name: 'List' });

        this.critter = critter;
      },
    },
  },
  beforeDestroy() {
    eventBus.$off('keyup', this.checkKey);
  },
  beforeMount() {
    eventBus.$on('keyup', this.checkKey);
  },
};
