export default (app) => {
  app.post(
    `/tenant/:tenantId/accountability-groups`,
    require('./accountabilityGroupsCreate').default,
  );
  app.put(
    `/tenant/:tenantId/accountability-groups/:id`,
    require('./accountabilityGroupsUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/accountability-groups/import`,
    require('./accountabilityGroupsImport').default,
  );
  app.delete(
    `/tenant/:tenantId/accountability-groups`,
    require('./accountabilityGroupsDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/accountability-groups/autocomplete`,
    require('./accountabilityGroupsAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/accountability-groups`,
    require('./accountabilityGroupsList').default,
  );
  app.get(
    `/tenant/:tenantId/accountability-groups/:id`,
    require('./accountabilityGroupsFind').default,
  );
};
