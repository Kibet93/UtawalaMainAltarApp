import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Roles {
  static get values() {
    return {
      visitor:'visitor',
      admin: 'admin',
      custom: 'custom',
      usher:'usher',
      protocol:'protocol',
      accountability:'accountability',
      category:'category',
      member:'member',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}

export default Roles;
