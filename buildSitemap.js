import * as admin from 'firebase-admin';

async function buildSitemap(req,res)  {

  // Use firebase-admin to gather necessary data
  // Build the sitemap file string
  // and send it back

  res.set('Content-Type', 'text/xml');
  res.status(200).send(SITEMAP_STRING);
  return;

}

export default buildSitemap;