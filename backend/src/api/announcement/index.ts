export default (app) => {
  app.post(
    `/tenant/:tenantId/announcement`,
    require('./announcementCreate').default,
  );
  app.put(
    `/tenant/:tenantId/announcement/:id`,
    require('./announcementUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/announcement/import`,
    require('./announcementImport').default,
  );
  app.delete(
    `/tenant/:tenantId/announcement`,
    require('./announcementDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/announcement/autocomplete`,
    require('./announcementAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/announcement`,
    require('./announcementList').default,
  );
  app.get(
    `/tenant/:tenantId/announcement/:id`,
    require('./announcementFind').default,
  );
};
