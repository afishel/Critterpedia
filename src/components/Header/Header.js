import { mapState, mapActions } from 'vuex';
import { NORTHERN_HEMISPHERE, SOUTHERN_HEMISPHERE } from '../../utils/types';

export default {
  name: 'Header',
  computed: {
    ...mapState(['hemisphere']),
  },
  data() {
    return {
      NORTHERN_HEMISPHERE,
      SOUTHERN_HEMISPHERE,
    };
  },
  methods: {
    ...mapActions(['changeHemisphere']),

    switchHemisphere() {
      const hemisphere = this.hemisphere === NORTHERN_HEMISPHERE
        ? SOUTHERN_HEMISPHERE
        : NORTHERN_HEMISPHERE;
      this.changeHemisphere(hemisphere);
    },
  },
};
