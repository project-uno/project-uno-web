import DS from 'ember-data';
import ENV from 'project-uno-web/config/environment';

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host:        ENV.APP.adapterHost,
  namespace:   ENV.APP.apiNamespace
});

export default ApplicationAdapter;
