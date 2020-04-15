// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('../../assets/icons', false, /\.svg$/);
requireAll(req);

export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    name() {
      return this.icon ? `#icon-${this.icon}` : '';
    },
    svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon';
    },
  },
};
