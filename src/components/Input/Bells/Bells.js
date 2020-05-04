import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Bells',
  computed: {
    ...mapState(['bells']),
    ...mapGetters(['prices']),
  },
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    ...mapActions(['changeBells']),
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
