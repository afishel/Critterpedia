import { mapState, mapActions } from 'vuex';
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
      position: 0,
      start: 0,
      width: 0,
    };
  },
  methods: {
    ...mapActions(['changeShowFilters']),
    showPictures() {},
    scroll(e) {
      this.position += e.deltaX * -1;
      // this.position += (e.shiftKey ? e.deltaX : e.deltaY) * -1;
      this.position = Math.min(Math.max(this.width, this.position), 0);
    },
  },
  beforeMount() {
    window.addEventListener('wheel', this.scroll);
  },
  mounted() {
    this.start = this.$refs.grid.offsetLeft;
    this.width = (this.$refs.grid.scrollWidth - this.$refs.grid.offsetWidth) * -1;
    // this.width = this.$refs.grid.scrollWidth;
  },
};
