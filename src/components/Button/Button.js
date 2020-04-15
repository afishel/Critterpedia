import EventBus from '../../utils/event-bus';

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    char: {
      type: String,
      default: '',
    },
    code: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    onkeyup(code) {
      if (this.code !== -1 && this.code === code) this.$el.click();
    },
  },
  beforeDestroy() {
    EventBus.$off('keyup', this.onkeyup);
  },
  beforeMount() {
    EventBus.$on('keyup', this.onkeyup);
  },
};
