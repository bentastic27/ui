import { resolve } from 'rsvp';
import { get, set, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import NewOrEdit from 'shared/mixins/new-or-edit';
import layout from './template';

export default Component.extend(NewOrEdit, {
  layout,
  intl: service(),

  ingress: null,
  editing: null,
  existing: null,
  namespacedCertificates: null,
  certificates: null,

  ruleBackendErrors: null,

  primaryResource: alias('ingress'),

  actions: {
    done() {
      this.sendAction('done');
    },
    cancel() {
      this.sendAction('cancel');
    },
  },

  headerLabel: computed('intl.locale', 'existing', function () {
    let k;
    if (get(this, 'existing')) {
      k = 'newIngress.header.edit';
    } else {
      k = 'newIngress.header.add';
    }
    return get(this, 'intl').t(k);
  }),

  willSave() {
    let pr = get(this, 'primaryResource');

    // Namespace is required, but doesn't exist yet... so lie to the validator
    let nsId = get(pr, 'namespaceId');
    set(pr, 'namespaceId', '__TEMP__');
    let ok = this.validate();
    set(pr, 'namespaceId', nsId);

    return ok;
  },

  doSave() {
    let pr = get(this, 'primaryResource');

    let namespacePromise = resolve();
    if (!get(this, 'existing')) {
      // Set the namespace ID
      if (get(this, 'namespace.id')) {
        set(pr, 'namespaceId', get(this, 'namespace.id'));
      } else if (get(this, 'namespace')) {
        namespacePromise = get(this, 'namespace').save().then((newNamespace) => {
          set(pr, 'namespaceId', get(newNamespace, 'id'));
          return newNamespace.waitForState('active');
        });
      }
    }

    let self = this;
    let sup = self._super;
    return namespacePromise.then(() => {
      return sup.apply(self, arguments);
    });
  },

  validate: function () {
    let intl = get(this, 'intl');

    let pr = get(this, 'primaryResource');
    let errors = pr.validationErrors() || [];

    errors.pushObjects(get(this, 'ruleBackendErrors') || []);
    errors.pushObjects(get(this, 'namespaceErrors') || []);

    if (!get(this, 'ingress.rules.length') && !get(this, 'ingress.defaultBackend')) {
      errors.push(intl.t('newIngress.error.noRules'));
    }

    if (errors.length) {
      set(this, 'errors', errors.uniq());
      return false;
    }

    return true;
  },

  doneSaving() {
    this._super(...arguments);
    this.send('done');
  },
});