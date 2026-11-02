export const sharedRoutes = ['/', '/about/', '/privacy/', '/terms/', '/cookies/'];
export const sectionRoutes = ['/overview/', '/photos/', '/tips/', '/map/', '/sources/', '/reviews/'];
export const frenchRoutes = ['/que-faire-etretat/', '/marees-etretat/', '/parking-etretat/', '/falaises-etretat/', '/etretat-en-1-jour/', '/points-photo-etretat/', '/etretat-avec-enfants/', '/galets-etretat/'];
export const languagePrefixes = ['', '/en', '/de', '/nl', '/it', '/es', '/zh'];
export const indexableRoutes = [...languagePrefixes.flatMap(prefix => sharedRoutes.map(path => prefix + path)), ...frenchRoutes];
export const allRoutes = [...indexableRoutes, ...languagePrefixes.flatMap(prefix => sectionRoutes.map(path => prefix + path))];
