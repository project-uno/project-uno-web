import DS from 'ember-data';
import ENV from 'project-uno-web/config/environment';

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: ENV.APP.adapterHost
});

export default ApplicationAdapter;
