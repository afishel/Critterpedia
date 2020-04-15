import tag from '../Tag/Tag.vue';

export default {
  name: 'Critter',
  props: {
    critter: {
      type: Object,
      required: true,
    },
  },
  components: {
    tag,
  },
};
