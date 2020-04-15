import { mapState } from 'vuex';
import appHeader from '../../components/Header/Header.vue';
import appFooter from '../../components/Footer/Footer.vue';
import tag from '../../components/Tag/Tag.vue';
import months from '../../utils/months';
import hours from '../../utils/hours';
import { NORTHERN_HEMISPHERE } from '../../utils/types';

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
    tag,
  },
  computed: {
    ...mapState(['critters', 'fish', 'insects', 'hemisphere']),
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
  },
  data() {
    return {
      hours,
      critter: {},
    };
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
};
